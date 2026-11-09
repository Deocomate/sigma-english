# Sigma English

> Sổ tay dự án. Claude đọc file này ĐẦU mỗi phiên làm việc và cập nhật CUỐI mỗi nhiệm vụ,
> để lần sau (hoặc người khác) tiếp tục được ngay mà không phải hỏi lại.

## Mục đích
- Ai dùng: học sinh và phụ huynh (trang Parent) của Sigma English
- Giải quyết việc gì: học từ vựng/ngữ pháp, luyện CAT4; app học 1 file nằm ở `learning-app/index.html`, phục vụ ở gốc `/`

## Link
- Link chia sẻ / production: https://sigma-english.thceramics.admirable.site (VPS, chi tiết ở docs/deployment.md)
- Repo: https://github.com/Deocomate/sigma-english

## Tính năng
<!-- Cập nhật trạng thái: [x] xong · [ ] dự kiến -->
- [x] Khung ứng dụng (trang chủ, xử lý lỗi, bảo mật cơ bản)
- [x] App học tiếng Anh cũ (`learning-app/` đã tách thành index.html + learn/, chạy ở chế độ local/localStorage; bản gốc xem docs/legacy-export.md)
- [x] Đăng nhập (admin tạo từ ADMIN_EMAIL/ADMIN_PASSWORD) và tự đăng ký cho mọi người (tắt bằng ALLOW_SIGNUP=false)
- [x] Tải file lên (`/uploads`): ảnh PNG/JPG/GIF/WebP, PDF, MP3, tối đa 5 MB, 100 file mỗi tài khoản; chỉ chủ file và admin xem được; admin quản lý mọi file
- [x] Thanh tài khoản trên app học (đăng nhập, đăng ký, file của tôi, đăng xuất)
- [ ] Đồng bộ dữ liệu app học lên backend và kiểm tra PIN phụ huynh phía máy chủ
<!-- [vibe:features] -->

## Dữ liệu (bảng chính)
| Bảng | Mô tả |
|------|-------|
| _migrations | (hệ thống) các migration đã chạy |
| users | tài khoản: email, tên, vai trò admin/member |
| uploads | file đã tải lên: chủ file, tên trên đĩa, tên gốc, loại, dung lượng |
<!-- [vibe:tables] -->

## Quyết định quan trọng
- File tải lên là riêng tư (chỉ chủ file và admin xem được), không nhận SVG/HTML vì có thể chứa script; loại file kiểm tra theo nội dung thật, không chỉ theo đuôi.
- File của app học (`learning-app/learn/`) và giao diện khung (`public/`) tách thư mục để cùng phục vụ ở gốc mà không trùng đường dẫn.
- `database/` và `assets/` (PIN phụ huynh, nhật ký, tiến độ trẻ em, ảnh chụp màn hình) bị gitignore vì repo public.
- Stack: Node.js 22 + Express 5 + Handlebars + Tailwind CSS 4 + SQLite (node:sqlite cho file local, libsql cho Turso).

## Nhật ký thay đổi
<!-- Mới nhất ở trên. Mỗi dòng: ngày — thay đổi — ai yêu cầu (nếu biết) -->
- 2026-11-09 — App học ra gốc `/`; mở đăng ký tự do; thêm module tải file `/uploads`; deploy lên VPS.
- 2026-11-09 — Deploy lên VPS; đổi driver SQLite local sang node:sqlite; thêm biến HOST.
- 2026-11-09 — Tách learning-app thành css/js, thêm docs/deployment.md.
- 2026-11-09 — Gộp khung fullstack chuẩn với app học cũ, đưa lên GitHub public.
- 2026-11-09 — Khởi tạo dự án.
