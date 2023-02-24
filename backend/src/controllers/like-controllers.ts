import { Request, Response, NextFunction } from 'express';

import { addLike, getOneLike, deleteOneLike } from '@/models/daos/like-daos';

export const addLikeToPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await addLike(req.body);
    if (result) return res.status(201).json(result);
    return res.status(500).json({ message: 'Add to DB process failed', error: true });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const deleteLike = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await deleteOneLike(req.params.idLike);
    if (result) return res.status(200).json({ message: 'Deleted' });
    res.status(400).json({ message: 'Like does not exist', error: true });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const getSingleLike = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await getOneLike(req.params.idPost, req.params.idUser);

    if (result) return res.status(200).json(result);
    res.status(200).json({ message: 'Like does not exist', error: true });
  } catch (err) {
    console.error(err);
    next(err);
  }
};
