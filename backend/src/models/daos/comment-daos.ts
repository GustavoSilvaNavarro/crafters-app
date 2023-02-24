import CommentModels from '@/models/schemas/comment-models';
import UserModels from '@/models/schemas/user-schema';

import { IComment } from '@/types/app-types';
import { AppErrors, HttpStatusCode } from '@/helpers/app-error';

export const getCommentsByPost = async (idPost: string) => {
  if (!isNaN(Number(idPost))) {
    const allComments = await CommentModels.findAll({
      where: { idPost },
      attributes: { exclude: ['idUser'] },
      include: {
        model: UserModels,
        attributes: ['username', 'userPicUrl', 'email'],
      },
      order: [['createdAt', 'DESC']],
    });

    return allComments;
  }

  throw new AppErrors({ message: 'Invalid ID', httpCode: HttpStatusCode.BAD_REQUEST, code: 4 });
};

export const postNewComment = async (info: IComment) => {
  const { comment, idUser, idPost } = info;

  if (!isNaN(Number(idUser)) && !isNaN(Number(idPost)) && comment && comment !== '') {
    const newComment = await CommentModels.create({ comment, idUser: Number(idUser), idPost: Number(idPost) });

    if (newComment) return newComment;
  }

  throw new AppErrors({ message: 'Invalid data from body', httpCode: HttpStatusCode.BAD_REQUEST, code: 4 });
};

export const deleteOneComment = async (idComment: string) => {
  if (!isNaN(Number(idComment))) {
    const commentDeleted = await CommentModels.destroy({ where: { id: idComment } });

    return commentDeleted;
  }

  throw new AppErrors({ message: 'Invalid ID', httpCode: HttpStatusCode.BAD_REQUEST, code: 4 });
};
