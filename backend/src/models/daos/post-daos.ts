import fs from 'fs-extra';

import PostModels from '@/models/schemas/post-models';
import UserModel from '@/models/schemas/user-schema';
import { checkValidEmail, checkTwoDecimalNumber } from '@/helpers/helper-functions';

import { uploadImage, deleteImage } from '@/services/cloudinary';
import { IPost, IFileImage } from '@/types/app-types';
import { AppErrors, HttpStatusCode } from '@/helpers/app-error';

export const retrievePostsData = async (email: string) => {
  if (checkValidEmail(email)) {
    const allPosts = await PostModels.findAll({
      where: {
        userEmail: email,
      },
      order: [['createdAt', 'DESC']],
    });

    return allPosts;
  }

  throw new AppErrors({ message: 'Needs to be an email', httpCode: HttpStatusCode.BAD_REQUEST, code: 4 });
};

export const addNewPost = async (info: IPost, image: IFileImage) => {
  const { title, description, userEmail, price } = info;
  if (title && userEmail && image) {
    const result = await uploadImage(image.path, 'posts');

    let money = 0;
    if (price && checkTwoDecimalNumber(String(price))) {
      money = price;
    }

    const newPost = await PostModels.create({
      title,
      description,
      userEmail,
      price: Number(money) * 100,
      postPicUrl: result.secure_url,
      public_image_id: result.public_id,
    });

    await fs.unlink(image.path);

    return newPost;
  }

  throw new AppErrors({ message: 'Please filled up all information', httpCode: HttpStatusCode.BAD_REQUEST, code: 4 });
};

export const retrieveOnePost = async (id: string) => {
  if (!isNaN(Number(id))) {
    const post = await PostModels.findOne({
      where: { id },
      attributes: { exclude: ['userEmail', 'public_image_id'] },
      include: {
        model: UserModel,
        attributes: ['userPicUrl', 'username', 'id', 'email'],
      },
    });

    return post;
  }
  throw new AppErrors({ message: 'ID must be a number', httpCode: HttpStatusCode.BAD_REQUEST, code: 4 });
};

export const deleteOnePost = async (idPost: string) => {
  if (!isNaN(Number(idPost))) {
    const postToDelete = await PostModels.findByPk(idPost);

    if (postToDelete) {
      const publicId = postToDelete.getDataValue('public_image_id');
      if (publicId) {
        await deleteImage(publicId);
      }
      const deletedPost = await PostModels.destroy({ where: { id: idPost } });
      return deletedPost;
    }
  }

  throw new AppErrors({ message: 'Invalid ID', httpCode: HttpStatusCode.BAD_REQUEST, code: 4 });
};

export const updatePostPartially = async (id: string, data: { sold: boolean }) => {
  if (!isNaN(Number(id)) && data) {
    const postExist = await PostModels.findOne({ where: { id } });

    if (postExist) {
      postExist.set({ sold: data.sold });
      await postExist.save();
    }

    return postExist;
  }

  throw new AppErrors({
    message: 'ID must be a number | Needs data to update ',
    httpCode: HttpStatusCode.BAD_REQUEST,
    code: 4,
  });
};
