import { Router } from 'express';
import { getUser } from './get';

const router = Router();

router.router('/user')
  .get(getUser);

export default router;
