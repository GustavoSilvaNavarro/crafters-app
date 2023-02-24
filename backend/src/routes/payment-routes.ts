import { Router } from 'express';

import { checkoutProcessStripe } from '@/controllers/payment-controllers';

const router = Router();

router.post('/create-checkout-session', checkoutProcessStripe);

export default router;
