import { Router } from 'express';

import { upload } from '@/services/multer';
import { getSingleUserInfo, postNewUser, updateUserInfo } from '@/controllers/user-controllers';

const router = Router();

router.get('/:userEmail', getSingleUserInfo);
router.post('/', postNewUser);
router.put('/:idUser', upload.single('userPic'), updateUserInfo);

export default router;
