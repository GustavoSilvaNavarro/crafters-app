import { Router } from 'express';

import { upload } from '@/services/multer';
import {
  createNewPost,
  getAllPosts,
  getSinglePost,
  deletePost,
  updatePostAfterPurchase,
} from '@/controllers/post-controllers';

const router = Router();

router.get('/:emailUser', getAllPosts);
router.post('/', upload.single('postPicture'), createNewPost);
router.get('/single-post/:idPost', getSinglePost);
router.delete('/delete-post/:idPost', deletePost);
router.patch('/update-post/:idPost', updatePostAfterPurchase);

export default router;
