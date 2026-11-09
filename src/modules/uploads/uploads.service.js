// Nghiệp vụ tải file: kiểm tra loại file theo nội dung thật, giới hạn số lượng, lưu đĩa + DB.
import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { config } from '#config';
import { AppError, badRequest, notFound } from '#lib/errors.js';
import * as repo from './uploads.repo.js';

const startsWith = (buf, bytes) => bytes.every((b, i) => buf[i] === b);
const ascii = (buf, from, to) => buf.subarray(from, to).toString('latin1');

// Chỉ nhận các loại an toàn để hiển thị lại. Không nhận SVG/HTML vì có thể chứa script.
const TYPES = {
  'image/png': { ext: '.png', matches: (b) => startsWith(b, [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]) },
  'image/jpeg': { ext: '.jpg', matches: (b) => startsWith(b, [0xff, 0xd8, 0xff]) },
  'image/gif': { ext: '.gif', matches: (b) => ascii(b, 0, 4) === 'GIF8' },
  'image/webp': { ext: '.webp', matches: (b) => ascii(b, 0, 4) === 'RIFF' && ascii(b, 8, 12) === 'WEBP' },
  'application/pdf': { ext: '.pdf', matches: (b) => ascii(b, 0, 5) === '%PDF-' },
  'audio/mpeg': { ext: '.mp3', matches: (b) => ascii(b, 0, 3) === 'ID3' || (b[0] === 0xff && (b[1] & 0xe0) === 0xe0) },
};

export const ACCEPTED_TYPES = Object.keys(TYPES);

const dirPath = () => path.resolve(config.uploads.dir);
const filePathOf = (storedName) => path.join(dirPath(), storedName);

/** Tên hiển thị an toàn: bỏ đường dẫn và ký tự điều khiển, luôn có đuôi đúng loại file. */
function cleanName(raw, ext) {
  let name = String(raw ?? '');
  try {
    name = decodeURIComponent(name);
  } catch {
    // giữ nguyên nếu không giải mã được
  }
  name = path.basename(name.replace(/\\/g, '/'))
    .replace(/[\u0000-\u001f<>:"|?*]/g, '')
    .trim()
    .slice(0, 120);
  if (!name) name = 'tep-tin';
  return name.toLowerCase().endsWith(ext) ? name : name + ext;
}

export async function saveUpload(user, { body, contentType, filename }) {
  const mime = String(contentType ?? '').split(';')[0].trim().toLowerCase();
  const type = TYPES[mime];
  if (!type) throw new AppError(415, 'Chỉ nhận ảnh (PNG, JPG, GIF, WebP), PDF hoặc MP3.');
  if (!Buffer.isBuffer(body) || body.length === 0) throw badRequest('File rỗng hoặc không đọc được.');
  if (!type.matches(body)) throw badRequest('Nội dung file không đúng với loại file đã chọn.');
  if ((await repo.countByUser(user.id)) >= config.uploads.maxPerUser) {
    throw new AppError(409, `Mỗi tài khoản lưu tối đa ${config.uploads.maxPerUser} file. Hãy xoá bớt file cũ.`);
  }

  const storedName = crypto.randomBytes(16).toString('hex') + type.ext;
  await fs.mkdir(dirPath(), { recursive: true });
  await fs.writeFile(filePathOf(storedName), body, { flag: 'wx' });
  try {
    const { id } = await repo.insert({
      userId: user.id,
      storedName,
      originalName: cleanName(filename, type.ext),
      mime,
      size: body.length,
    });
    return { id };
  } catch (err) {
    await fs.rm(filePathOf(storedName), { force: true });
    throw err;
  }
}

/** Admin thấy mọi file; người khác chỉ thấy file của mình. */
export const listFor = (user) => (user.role === 'admin' ? repo.listAll() : repo.listByUser(user.id));

/** Trả file nếu là chủ file hoặc admin; ngược lại coi như không tồn tại (không lộ id của người khác). */
async function ownedUpload(user, id) {
  const upload = await repo.findById(id);
  if (!upload || (upload.user_id !== user.id && user.role !== 'admin')) throw notFound();
  return upload;
}

export async function fileFor(user, id) {
  const upload = await ownedUpload(user, id);
  return { upload, filePath: filePathOf(upload.stored_name) };
}

export async function removeUpload(user, id) {
  const upload = await ownedUpload(user, id);
  await repo.remove(upload.id);
  await fs.rm(filePathOf(upload.stored_name), { force: true });
}
