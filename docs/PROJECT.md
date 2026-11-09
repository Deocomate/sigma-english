# Sigma English

> Sổ tay dự án. Claude đọc file này ĐẦU mỗi phiên làm việc và cập nhật CUỐI mỗi nhiệm vụ,
> để lần sau (hoặc người khác) tiếp tục được ngay mà không phải hỏi lại.

## Mục đích
- Ai dùng: học sinh và phụ huynh (trang Parent) của Sigma English
- Giải quyết việc gì: học từ vựng/ngữ pháp, luyện CAT4; app học 1 file nằm ở `learning-app/index.html`, phục vụ tại `/app/`

## Link
- Link chia sẻ / production: (chưa deploy)
- Repo: https://github.com/Deocomate/sigma-english

## Tính năng
<!-- Cập nhật trạng thái: [x] xong · [ ] dự kiến -->
- [x] Khung ứng dụng (trang chủ, xử lý lỗi, bảo mật cơ bản)
- [x] App học tiếng Anh cũ (`learning-app/` đã tách thành index.html + css/ + js/, chạy ở chế độ local/localStorage; bản gốc xem docs/legacy-export.md)
- [x] Đăng nhập (admin tạo từ ADMIN_EMAIL/ADMIN_PASSWORD; tự đăng ký khi ALLOW_SIGNUP=true)
- [ ] Đồng bộ dữ liệu app học lên backend và kiểm tra PIN phụ huynh phía máy chủ
<!-- [vibe:features] -->

## Dữ liệu (bảng chính)
| Bảng | Mô tả |
|------|-------|
| _migrations | (hệ thống) các migration đã chạy |
| users | tài khoản: email, tên, vai trò admin/member |
<!-- [vibe:tables] -->

## Quyết định quan trọng
- `database/` và `assets/` (PIN phụ huynh, nhật ký, tiến độ trẻ em, ảnh chụp màn hình) bị gitignore vì repo public.
- Stack: Node.js 22 + Express 5 + Handlebars + Tailwind CSS 4 + SQLite (libsql).

## Nhật ký thay đổi
<!-- Mới nhất ở trên. Mỗi dòng: ngày — thay đổi — ai yêu cầu (nếu biết) -->
- 2026-11-09 — Tách learning-app thành css/js, thêm docs/deployment.md.
- 2026-11-09 — Gộp khung fullstack chuẩn với app học cũ, đưa lên GitHub public.
- 2026-11-09 — Khởi tạo dự án.
