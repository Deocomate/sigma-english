import { Router } from 'express';

const router = Router();

// Trang đầu tiên khách thấy là app học tiếng Anh, không phải trang chào của khung dự án.
router.get('/', (req, res) => {
  res.redirect('/app/');
});

export default router;
