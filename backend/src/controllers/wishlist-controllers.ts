import { Request, Response, NextFunction } from 'express';

import {
  addWishListToDb,
  deleteSingleWish,
  listWishByUser,
  getSingleWishList,
  getNumberOfYOurWishList,
} from '@/models/daos/wishlist-daos';

export const addToTheWishList = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await addWishListToDb(req.body);
    if (result) return res.status(201).json(result);
    return res.status(500).json({ message: 'Add to DB process failed', error: true });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const deleteFromWishList = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await deleteSingleWish(req.params.idWishlist);
    if (result) return res.status(200).json({ message: 'Deleted' });
    res.status(400).json({ message: 'Wish does not exist', error: true });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const getWishListByUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const list = await listWishByUser(req.params.idUser);
    return res.status(200).json(list);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const getOneWish = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await getSingleWishList(req.params.idPost, req.params.idUser);

    if (result) return res.status(200).json(result);
    res.status(200).json({ message: 'Wish does not exist', error: true });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const numberOfFavs = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await getNumberOfYOurWishList(req.params.idUser);
    res.status(200).json({ number: result });
  } catch (err) {
    console.error(err);
    next(err);
  }
};
