import { Router } from 'express';

import { createNewOrder } from '@/controllers/order-controllers';

const router = Router();

router.post('/create-order/user/:idUser/post/:idPost', createNewOrder);

export default router;
