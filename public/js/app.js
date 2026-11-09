// JS phía trình duyệt dùng chung. CSP chặn <script> inline và onclick="",
// nên mọi hành vi đặt ở đây và gắn qua thuộc tính data-*.

// <form data-confirm="Bạn chắc chứ?"> -> hỏi trước khi gửi.
document.addEventListener('submit', (event) => {
  const form = event.target.closest('form[data-confirm]');
  if (form && !window.confirm(form.dataset.confirm)) event.preventDefault();
});

// Chống bấm gửi 2 lần.
document.addEventListener('submit', (event) => {
  if (event.defaultPrevented) return;
  const button = event.target.querySelector('button[type="submit"]');
  if (button) setTimeout(() => (button.disabled = true), 0);
});

// <input|select data-autosubmit> -> tự gửi form khi đổi giá trị (VD: chọn ngày, bộ lọc).
document.addEventListener('change', (event) => {
  if (event.target.matches('[data-autosubmit]')) event.target.form?.requestSubmit();
});

// <a data-back> -> quay lại trang trước.
document.addEventListener('click', (event) => {
  if (event.target.closest('[data-back]')) {
    event.preventDefault();
    history.back();
  }
});

// Thông báo flash tự ẩn sau 5 giây.
document.querySelectorAll('[data-dismissible]').forEach((el) => {
  setTimeout(() => el.remove(), 5000);
});

// <input type="file" data-upload-input> -> tải từng file lên /uploads (gửi nguyên nội dung file), xong thì tải lại trang.
document.addEventListener('change', async (event) => {
  const input = event.target.closest('[data-upload-input]');
  if (!input || !input.files.length) return;
  const status = document.querySelector('[data-upload-status]');
  const token = document.querySelector('meta[name="csrf-token"]')?.content;
  const failed = [];
  let uploaded = 0;

  for (const file of input.files) {
    status.textContent = `Đang tải ${file.name}...`;
    try {
      const response = await fetch('/uploads', {
        method: 'POST',
        headers: {
          'Content-Type': file.type || 'application/octet-stream',
          'x-filename': encodeURIComponent(file.name),
          'x-csrf-token': token,
          Accept: 'application/json',
        },
        body: file,
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(response.status === 413 ? 'File quá lớn.' : data.error || `Lỗi ${response.status}`);
      }
      uploaded += 1;
    } catch (err) {
      failed.push(`${file.name}: ${err.message}`);
    }
  }

  if (!failed.length) return location.reload();
  status.textContent = failed.join(' · ');
  status.classList.add('text-red-600');
  input.value = '';
  if (uploaded) setTimeout(() => location.reload(), 3000);
});

/** Gọi API JSON có kèm CSRF token. Dùng: await api('/api/items', { method: 'POST', body: {...} }) */
window.api = async (url, { method = 'GET', body } = {}) => {
  const token = document.querySelector('meta[name="csrf-token"]')?.content;
  const response = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json', Accept: 'application/json', 'x-csrf-token': token },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || `Lỗi ${response.status}`);
  return data;
};
