import { test } from 'node:test';
import assert from 'node:assert/strict';
import { setup, postForm } from './helpers.js';

const { agent } = await setup();

test('trang chủ chuyển thẳng vào app học tiếng Anh', async () => {
  const first = await agent.get('/');
  assert.equal(first.status, 302);
  assert.equal(first.headers.location, '/app/');
  const res = await agent.get('/').redirects(5);
  assert.equal(res.status, 200);
  assert.match(res.text, /<title>/);
});

test('healthz trả về ok', async () => {
  const res = await agent.get('/healthz');
  assert.equal(res.status, 200);
  assert.deepEqual(res.body, { ok: true });
});

test('trang không tồn tại trả 404 thân thiện', async () => {
  const res = await agent.get('/khong-ton-tai');
  assert.equal(res.status, 404);
  assert.match(res.text, /Không tìm thấy/);
});

test('POST thiếu CSRF bị chặn', async () => {
  const res = await agent.post('/').type('form').send({ a: 1 });
  assert.equal(res.status, 403);
});

test('POST có CSRF đi qua được lớp bảo vệ', async () => {
  const res = await postForm(agent, '/khong-ton-tai', {});
  assert.equal(res.status, 404); // qua được CSRF, rồi mới 404
});

test('header bảo mật được bật', async () => {
  const res = await agent.get('/login');
  assert.ok(res.headers['content-security-policy']);
  assert.equal(res.headers['x-powered-by'], undefined);
});

test('app học tiếng Anh (learning-app) được phục vụ tại /app/', async () => {
  const res = await agent.get('/app/');
  assert.equal(res.status, 200);
  assert.match(res.text, /<html/i);
});
