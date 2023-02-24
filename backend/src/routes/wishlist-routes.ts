import { Router } from 'express';

import {
  addToTheWishList,
  deleteFromWishList,
  getWishListByUser,
  getOneWish,
  numberOfFavs,
} from '@/controllers/wishlist-controllers';

const router = Router();

router.post('/', addToTheWishList);
router.get('/:idUser', getWishListByUser);
router.get('/user/:idUser/post/:idPost', getOneWish);
router.delete('/delete/:idWishlist', deleteFromWishList);
router.get('/number-favs/:idUser', numberOfFavs);

export default router;
