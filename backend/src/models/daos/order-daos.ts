import OrderModel from '@/models/schemas/order-models';
import UserModel from '@/models/schemas/user-schema';
import PostModel from '@/models/schemas/post-models';

import { AppErrors, HttpStatusCode } from '@/helpers/app-error';

export const addOrder = async (idUser: string, idPost: string) => {
  if (!isNaN(Number(idUser)) && !isNaN(Number(idPost))) {
    const findUser = UserModel.findByPk(idUser);
    const findPost = PostModel.findByPk(idPost);

    const [user, post] = await Promise.all([findUser, findPost]);

    if (user && post && !post.getDataValue('sold')) {
      const newOrder = await OrderModel.create({
        total_price: post.getDataValue('price') as number,
        total_quantity: 1,
        idPost: Number(idPost),
        idUser: Number(idUser),
      });

      return newOrder;
    }

    throw new AppErrors({ message: 'Post already bought', httpCode: HttpStatusCode.BAD_REQUEST, code: 4 });
  }

  throw new AppErrors({ message: 'ID must be a number', httpCode: HttpStatusCode.BAD_REQUEST, code: 4 });
};
