import { config } from '#config';
import * as service from './uploads.service.js';

const formatSize = (bytes) => (bytes >= 1048576 ? `${(bytes / 1048576).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`);

export async function index(req, res) {
  const isAdmin = req.user.role === 'admin';
  const items = (await service.listFor(req.user)).map((u) => ({
    ...u,
    sizeLabel: formatSize(u.size),
    isImage: u.mime.startsWith('image/'),
  }));
  res.render('uploads/index', {
    title: isAdmin ? 'Tất cả file' : 'File của tôi',
    items,
    isAdmin,
    accept: service.ACCEPTED_TYPES.join(','),
    maxMb: Math.round(config.uploads.maxBytes / 1048576),
  });
}

// Trình duyệt gửi nguyên nội dung file làm body (không dùng multipart); tên file nằm ở header x-filename.
export async function create(req, res) {
  const { id } = await service.saveUpload(req.user, {
    body: req.body,
    contentType: req.get('content-type'),
    filename: req.get('x-filename'),
  });
  res.status(201).json({ id });
}

export async function file(req, res) {
  const { upload, filePath } = await service.fileFor(req.user, req.params.id);
  res.sendFile(filePath, {
    headers: {
      'Content-Type': upload.mime,
      'Content-Disposition': `inline; filename*=UTF-8''${encodeURIComponent(upload.original_name)}`,
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': 'private, max-age=3600',
    },
  });
}

export async function destroy(req, res) {
  await service.removeUpload(req.user, req.params.id);
  req.flash('success', 'Đã xoá file.');
  res.redirect('/uploads');
}
