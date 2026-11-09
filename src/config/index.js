// Đọc cấu hình từ biến môi trường ở MỘT chỗ duy nhất.
// Code khác chỉ import `config`, không đọc process.env trực tiếp.

const env = process.env;
const DEV_SECRET = 'dev-only-secret-change-me';

const nodeEnv = env.NODE_ENV ?? 'development';

export const config = Object.freeze({
  env: nodeEnv,
  isProd: nodeEnv === 'production',
  isTest: nodeEnv === 'test',
  onRender: Boolean(env.RENDER), // Render tự đặt biến RENDER
  port: Number(env.PORT ?? 3000),
  host: env.HOST || undefined, // đặt 127.0.0.1 khi chạy sau nginx để chỉ nginx truy cập được
  appName: env.APP_NAME ?? 'Sigma English',
  timezone: env.APP_TIMEZONE || 'Asia/Ho_Chi_Minh',
  locale: env.APP_LOCALE || 'vi-VN',
  sessionSecret: env.SESSION_SECRET ?? DEV_SECRET,
  db: Object.freeze({
    // Local: file SQLite. Production free: Turso (libsql://...), cùng API.
    url: env.DATABASE_URL || 'file:data/app.db',
    authToken: env.DATABASE_AUTH_TOKEN || undefined,
  }),
  auth: Object.freeze({
    adminEmail: env.ADMIN_EMAIL || undefined,
    adminPassword: env.ADMIN_PASSWORD || undefined,
    // Ai cũng tự đăng ký được, trừ khi đặt ALLOW_SIGNUP=false.
    allowSignup: env.ALLOW_SIGNUP !== 'false',
  }),
  uploads: Object.freeze({
    dir: env.UPLOADS_DIR || 'data/uploads',
    maxBytes: Number(env.UPLOAD_MAX_MB ?? 5) * 1024 * 1024, // nginx cũng phải cho phép cỡ này
    maxPerUser: Number(env.UPLOAD_MAX_FILES ?? 100),
  }),
  // [vibe:config]
});

if (config.isProd && config.sessionSecret === DEV_SECRET) {
  throw new Error('SESSION_SECRET chưa được đặt cho môi trường production.');
}
