import { test } from 'node:test';
import assert from 'node:assert/strict';
import { setup, postForm } from './helpers.js';

const { agent } = await setup();

test('gốc / là app học tiếng Anh (không chuyển hướng)', async () => {
  const res = await agent.get('/');
  assert.equal(res.status, 200);
  assert.match(res.text, /<title>Sigma English<\/title>/);
  assert.match(res.text, /id="account-bar"/);
});

test('link cũ /app/ chuyển về gốc', async () => {
  const res = await agent.get('/app/');
  assert.equal(res.status, 301);
  assert.equal(res.headers.location, '/');
});

test('/api/me cho biết trạng thái đăng nhập và cho phép đăng ký', async () => {
  const res = await agent.get('/api/me');
  assert.equal(res.status, 200);
  assert.equal(res.body.user, null);
  assert.equal(res.body.allowSignup, true);
  assert.ok(res.body.csrfToken);
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

test('file của app học và của khung dự án không đè lên nhau', async () => {
  for (const url of ['/learn/app.js', '/learn/content.js', '/learn/app.css', '/learn/account-bar.js']) {
    assert.equal((await agent.get(url)).status, 200, url);
  }
  assert.equal((await agent.get('/css/app.css')).status, 200); // giao diện Tailwind của trang đăng nhập
  assert.equal((await agent.get('/js/app.js')).status, 200);
});
