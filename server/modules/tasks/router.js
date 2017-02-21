import { Router } from 'express';
import * as controller from './controller';

const router = new Router();

// basic router CRUD
router.get('/', controller.list);
router.get('/:id', controller.load);
router.post('/', controller.save);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

export default router;