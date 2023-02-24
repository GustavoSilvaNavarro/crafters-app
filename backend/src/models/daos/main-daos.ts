import PostSchema from '@/models/schemas/post-models';
import UserModel from '@/models/schemas/user-schema';

export const retrieveAllPosts = async () => {
  const allPosts = await PostSchema.findAll({
    attributes: { exclude: ['userEmail'] },
    order: [['createdAt', 'DESC']],
    include: {
      model: UserModel,
      attributes: ['id', 'email', 'userPicUrl', 'username'],
    },
  });

  return allPosts;
};
