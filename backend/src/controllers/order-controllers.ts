import { Request, Response, NextFunction } from 'express';

import { addOrder } from '@/models/daos/order-daos';

export const createNewOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await addOrder(req.params.idUser, req.params.idPost);
    return res.status(200).json(result);
  } catch (err) {
    console.error(err);
    next(err);
  }
};
