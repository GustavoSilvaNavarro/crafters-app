import { Request, Response, NextFunction } from 'express';

import { retrieveAllPosts } from '@/models/daos/main-daos';

export const getListOfPosts = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const posts = await retrieveAllPosts();
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
};
