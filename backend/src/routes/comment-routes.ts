import { Router } from 'express';

import { createNewComment, retrieveCommentsByPost, deleteSingleComment } from '@/controllers/comment-controllers';

const router = Router();

router.post('/', createNewComment);
router.get('/:idPost', retrieveCommentsByPost);
router.delete('/delete/:idComment', deleteSingleComment);

export default router;
