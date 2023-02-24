import { Request, Response, NextFunction } from 'express';

import { retrieveUserInfo, createNewUser, upgradeInfoUser } from '@/models/daos/user-daos';

export const getSingleUserInfo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await retrieveUserInfo(req.params.userEmail);
    return res.status(200).json(user);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const postNewUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newUser = await createNewUser(req.body);
    return res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const updateUserInfo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedUser = await upgradeInfoUser(req.params.idUser, req.body, req.file);
    return res.status(200).json(updatedUser);
  } catch (err) {
    console.error(err);
    next(err);
  }
};
