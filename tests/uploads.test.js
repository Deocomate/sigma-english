import { test, after } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

// Đặt biến môi trường trước khi nạp app.
const uploadsDir = fs.mkdtempSync(path.join(os.tmpdir(), 'sigma-uploads-'));
process.env.UPLOADS_DIR = uploadsDir;
process.env.UPLOAD_MAX_FILES = '3';
const { setup, postForm, csrfToken } = await import('./helpers.js');
const { loginAsAdmin } = await import('./auth-helpers.js');

after(() => fs.rmSync(uploadsDir, { recursive: true, force: true }));

const PNG = Buffer.concat([Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]), Buffer.alloc(32)]);

async function upload(agent, { body = PNG, type = 'image/png', name = 'anh.png' } = {}) {
  const token = await csrfToken(agent);
  return agent.post('/uploads').set('Accept', 'application/json').set('x-csrf-token', token).set('Content-Type', type).set('x-filename', encodeURIComponent(name)).send(body);
}

async function newMember(email) {
  const { agent } = await setup();
  const res = await postForm(agent, '/signup', { name: 'Học viên', email, password: '12345678' });
  assert.equal(res.status, 302);
  return agent;
}

test('chưa đăng nhập thì không xem được và không tải lên được', async () => {
  const { agent } = await setup();
  const page = await agent.get('/uploads');
  assert.equal(page.status, 302);
  assert.match(page.headers.location, /^\/login/);
  assert.equal((await upload(agent)).status, 403);
});

test('người dùng tự đăng ký, tải ảnh lên, xem lại và xoá', async () => {
  const agent = await newMember('hocvien1@test.local');

  const created = await upload(agent, { name: 'Ảnh lớp học.png' });
  assert.equal(created.status, 201);
  const { id } = created.body;

  const page = await agent.get('/uploads');
  assert.equal(page.status, 200);
  assert.match(page.text, /Ảnh lớp học\.png/);

  const file = await agent.get(`/uploads/${id}/file`);
  assert.equal(file.status, 200);
  assert.equal(file.headers['content-type'], 'image/png');
  assert.equal(file.headers['x-content-type-options'], 'nosniff');

  const removed = await postForm(agent, `/uploads/${id}/delete`);
  assert.equal(removed.status, 302);
  assert.equal((await agent.get(`/uploads/${id}/file`)).status, 404);
  assert.equal(fs.readdirSync(uploadsDir).length, 0, 'file trên đĩa cũng phải bị xoá');
});

test('file của người này không xem hay xoá được bởi người khác, nhưng admin thì được', async () => {
  const owner = await newMember('chu@test.local');
  const other = await newMember('nguoikhac@test.local');
  const { id } = (await upload(owner)).body;

  assert.equal((await other.get(`/uploads/${id}/file`)).status, 404);
  assert.equal((await postForm(other, `/uploads/${id}/delete`)).status, 404);
  assert.doesNotMatch((await other.get('/uploads')).text, /anh\.png/);

  const { agent: admin } = await setup();
  await loginAsAdmin(admin);
  assert.equal((await admin.get(`/uploads/${id}/file`)).status, 200);
  assert.match((await admin.get('/uploads')).text, /Học viên/); // admin thấy tên chủ file
});

test('từ chối loại file nguy hiểm, nội dung giả mạo và file rỗng', async () => {
  const agent = await newMember('kiemtra@test.local');
  const html = Buffer.from('<script>alert(1)</script>');

  assert.equal((await upload(agent, { body: html, type: 'text/html', name: 'x.html' })).status, 415);
  assert.equal((await upload(agent, { body: Buffer.from('<svg/>'), type: 'image/svg+xml', name: 'x.svg' })).status, 415);
  const fake = await upload(agent, { body: html, type: 'image/png', name: 'gia-mao.png' });
  assert.equal(fake.status, 400);
  assert.match(fake.body.error, /không đúng/);
  assert.equal((await upload(agent, { body: Buffer.alloc(0) })).status, 400);
});

test('file quá lớn bị từ chối', async () => {
  const agent = await newMember('lon@test.local');
  const big = Buffer.concat([PNG, Buffer.alloc(5 * 1024 * 1024)]);
  assert.equal((await upload(agent, { body: big })).status, 413);
});

test('mỗi tài khoản có giới hạn số file', async () => {
  const agent = await newMember('gioihan@test.local');
  for (let i = 0; i < 3; i += 1) assert.equal((await upload(agent, { name: `a${i}.png` })).status, 201);
  const over = await upload(agent, { name: 'a4.png' });
  assert.equal(over.status, 409);
  assert.match(over.body.error, /tối đa 3 file/);
});

test('tên file chứa đường dẫn được làm sạch', async () => {
  const agent = await newMember('ten@test.local');
  const { id } = (await upload(agent, { name: '../../etc/passwd' })).body;
  const page = await agent.get('/uploads');
  assert.match(page.text, />passwd\.png</);
  assert.equal((await agent.get(`/uploads/${id}/file`)).status, 200);
});
