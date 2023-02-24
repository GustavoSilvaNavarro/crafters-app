import LikeModel from '@/models/schemas/like-models';
import { AppErrors, HttpStatusCode } from '@/helpers/app-error';

import { ILike } from '@/types/app-types';

export const getOneLike = async (idPost: string, idUser: string) => {
  if (!isNaN(Number(idPost)) && !isNaN(Number(idUser))) {
    const like = await LikeModel.findOne({ where: { idPost, idUser } });

    return like;
  }

  throw new AppErrors({ message: 'Invalid ID', httpCode: HttpStatusCode.BAD_REQUEST, code: 4 });
};

export const addLike = async (info: ILike) => {
  const { idPost, idUser } = info;
  if (idPost && idUser) {
    if (!isNaN(Number(idPost)) && !isNaN(Number(idUser))) {
      const existingLike = await LikeModel.findOne({ where: { idPost, idUser } });

      if (!existingLike) {
        const newLike = await LikeModel.create({ idPost, idUser, like: true });
        return newLike;
      } else {
        throw new AppErrors({ message: 'Like already exist', httpCode: HttpStatusCode.BAD_REQUEST, code: 4 });
      }
    }
  }

  throw new AppErrors({ message: 'Invalid ID', httpCode: HttpStatusCode.BAD_REQUEST, code: 4 });
};

export const deleteOneLike = async (idLike: string) => {
  if (!isNaN(Number(idLike))) {
    const deleted = await LikeModel.destroy({ where: { id: idLike } });
    return deleted;
  }

  throw new AppErrors({ message: 'Invalid ID', httpCode: HttpStatusCode.BAD_REQUEST, code: 4 });
};
