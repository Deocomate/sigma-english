import { Router, raw } from 'express';
import { config } from '#config';
import { numericId } from '#middleware/params.js';
import * as controller from './uploads.controller.js';

const router = Router();
router.param('id', numericId);

router.get('/', controller.index);
router.post('/', raw({ type: () => true, limit: config.uploads.maxBytes }), controller.create);
router.get('/:id/file', controller.file);
router.post('/:id/delete', controller.destroy);

export default router;
