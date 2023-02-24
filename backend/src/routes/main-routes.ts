import { Router } from 'express';

import { getListOfPosts } from '@/controllers/main-controllers';

const router = Router();

router.get('/', getListOfPosts);

export default router;
