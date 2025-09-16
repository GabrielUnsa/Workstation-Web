import { Router } from 'express';
import { getUser } from './get';

const router = Router();

router.route('/user')
  .get(getUser);

export default router;
