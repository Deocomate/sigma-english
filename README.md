# Sigma English

Ứng dụng web nội bộ: Node.js 22 · Express 5 · Handlebars · Tailwind CSS 4 · SQLite.

Repo public. Hướng dẫn deploy: `docs/deployment.md`. Sổ tay dự án: `docs/PROJECT.md`.

## Chạy trên máy
```bash
npm install
cp .env.example .env      # rồi sửa SESSION_SECRET
npm run dev               # http://localhost:3000 (tự reload khi sửa code)
```

## Lệnh thường dùng
| Lệnh | Việc |
|------|------|
| `npm run dev` | Chạy chế độ phát triển |
| `npm test` | Chạy test |
| `npm run check` | Tự review: cú pháp, test, bảo mật, cấu trúc |
| `npm run share` | Tạo link public tạm thời từ máy này (Cloudflare Tunnel) |
| `npm run migrate` | Chạy migration database |

## Cấu trúc
```
src/
  app.js              lắp ráp Express (middleware, view, module)
  server.js           khởi động: migrate + listen
  config/             đọc biến môi trường (duy nhất ở đây)
  db/                 kết nối SQLite, migrate, migrations/*.sql
  lib/                tiện ích dùng chung (validate, pagination, errors, view-helpers)
  middleware/         csrf, flash, locals, xử lý lỗi
  modules/<tên>/      mỗi tính năng: routes → controller → service → repo (+ schema)
  views/              layouts, partials (UI dùng chung), <tên module>/
  styles/app.css      Tailwind + bộ class UI dùng chung (.btn-primary, .card, .input…)
public/               file tĩnh (css build ra, js, ảnh)
tests/                test (node:test + supertest)
docs/PROJECT.md       sổ tay dự án
```

## Deploy free
Xem hướng dẫn trong `render.yaml` (Render free + Turso free) hoặc `npm run share`.

## App học (learning-app/)
```
learning-app/
  index.html              khung trang (phục vụ ở gốc /)
  learn/app.css           giao diện
  learn/content.js        nội dung bài học (từ vựng, ngữ pháp, bài đọc, đề)
  learn/app.js            logic: lưu trữ, quiz, CAT4, khu phụ huynh
  learn/account-bar.*     thanh đăng nhập / đăng ký / file của tôi
```
Phục vụ ở gốc `/` (đặt trước helmet nên không bị CSP chặn, vì app dùng style/script riêng). Thanh đăng nhập/đăng ký ở đầu trang do `learn/account-bar.js` vẽ, lấy trạng thái từ `/api/me`. Công cụ tạo dữ liệu CAT4: `tools/cat4/`.
