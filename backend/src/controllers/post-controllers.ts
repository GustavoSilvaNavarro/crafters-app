import { Request, Response, NextFunction } from 'express';

import {
  addNewPost,
  retrievePostsData,
  retrieveOnePost,
  deleteOnePost,
  updatePostPartially,
} from '@/models/daos/post-daos';

export const getAllPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.params.emailUser) {
      const result = await retrievePostsData(req.params.emailUser);

      return res.status(200).json(result);
    }

    return res.status(400).json({ message: 'Please provide a user email' });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const createNewPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.file && req.body) {
      const post = await addNewPost(req.body, req.file);
      return res.status(201).json(post);
    }

    return res.status(400).json({ message: 'Please filled up the information' });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const getSinglePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const post = await retrieveOnePost(req.params.idPost);

    if (post) return res.status(200).json(post);
    else return res.status(400).json({ message: 'Post does not exist' });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await deleteOnePost(req.params.idPost);

    if (result) res.status(200).json({ message: 'Deleted' });
    else res.status(405).json({ message: 'Post not deleted', error: true });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const updatePostAfterPurchase = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await updatePostPartially(req.params.idPost, req.body);

    if (result) return res.status(200).json(result);
    else return res.status(400).json({ message: 'Post does not exist', error: true });
  } catch (err) {
    console.error(err);
    next(err);
  }
};
