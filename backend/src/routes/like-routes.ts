import { Router } from 'express';

import { addLikeToPost, getSingleLike, deleteLike } from '@/controllers/like-controllers';

const router = Router();

router.post('/', addLikeToPost);
router.get('/user/:idUser/post/:idPost', getSingleLike);
router.delete('/delete/:idLike', deleteLike);

export default router;
