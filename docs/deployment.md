# Deploy Sigma English

Repo: https://github.com/Deocomate/sigma-english · Health check: `/healthz` · App học: `/app/`

## Trước khi deploy
- `npm run check` phải 0 lỗi.
- Không đẩy dữ liệu thật lên repo public. Thư mục `database/` (PIN phụ huynh, nhật ký, tiến độ học sinh) và `assets/` (ảnh) chỉ nằm trên máy, đã gitignore.
- Mã PIN phụ huynh hiện lưu dạng chữ thường trong `app/settings` và được kiểm tra ở trình duyệt. Chưa phải bảo mật thật; xem "Giới hạn hiện tại".

## Render + Turso (miễn phí)
1. Turso: `turso db create sigma-english`, rồi lấy `turso db show sigma-english --url` (DATABASE_URL) và `turso db tokens create sigma-english` (DATABASE_AUTH_TOKEN).
2. Render Dashboard → New → Blueprint → chọn repo `Deocomate/sigma-english` (đọc `render.yaml`).
3. Điền biến môi trường:

| Biến | Giá trị |
|------|---------|
| `DATABASE_URL`, `DATABASE_AUTH_TOKEN` | từ Turso |
| `ADMIN_EMAIL`, `ADMIN_PASSWORD` | tài khoản admin, mật khẩu mạnh, khác bản trên máy |
| `SESSION_SECRET` | Render tự sinh |
| `ALLOW_SIGNUP` | `false` (mặc định) |

4. Sau deploy kiểm tra: `/healthz` trả `{"ok":true}`, `/app/` mở được, log không có cảnh báo dùng file SQLite.
5. Render free ngủ sau 15 phút không truy cập; lần mở đầu chờ khoảng 1 phút.

## Giới hạn hiện tại
- App học (`learning-app/`) chạy ở chế độ local: tiến độ lưu trong localStorage của từng trình duyệt, không đồng bộ giữa thiết bị, không có ảnh tải lên và tính năng AI (xem `docs/legacy-export.md`).
- Đồng bộ dữ liệu lên backend (SQLite/Turso) và kiểm tra PIN phía máy chủ là bước phát triển tiếp theo, chưa làm.
- Dữ liệu cũ trong `database/db-export.json` chưa được nhập vào backend mới.
