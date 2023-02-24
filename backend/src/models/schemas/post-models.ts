import { DataTypes, Model, Optional } from 'sequelize';

import { sequelize } from '@/models/connectionDb';
import { CommentSchema } from '@/models/schemas/comment-models';
import { WishListSchema } from '@/models/schemas/wishList-models';
import { OrderSchema } from '@/models/schemas/order-models';
import { LikeSchema } from '@/models/schemas/like-models';

import { IPost } from '@/types/app-types';

export const PostSchema = sequelize.define<Model<IPost, Optional<IPost, 'id'>>>('posts', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  // userEmail: {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  //   validate: {
  //     isEmail: {
  //       msg: 'User must be an Email',
  //     },
  //   },
  // },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  postPicUrl: {
    type: DataTypes.STRING,
  },
  public_image_id: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.BIGINT,
    defaultValue: 0,
    validate: {
      isInt: {
        msg: 'Must be an integer',
      },
    },
  },
  sold: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

PostSchema.hasMany(CommentSchema, {
  foreignKey: 'idPost',
  sourceKey: 'id',
  onDelete: 'CASCADE',
});

CommentSchema.belongsTo(PostSchema, {
  foreignKey: 'idPost',
  targetKey: 'id',
});

PostSchema.hasMany(WishListSchema, {
  foreignKey: 'idPost',
  sourceKey: 'id',
  onDelete: 'CASCADE',
});

WishListSchema.belongsTo(PostSchema, {
  foreignKey: 'idPost',
  targetKey: 'id',
});

PostSchema.hasMany(OrderSchema, {
  foreignKey: 'idPost',
  sourceKey: 'id',
  onDelete: 'CASCADE',
});

OrderSchema.belongsTo(PostSchema, {
  foreignKey: 'idPost',
  targetKey: 'id',
});

PostSchema.hasMany(LikeSchema, {
  foreignKey: 'idPost',
  sourceKey: 'id',
  onDelete: 'CASCADE',
});

LikeSchema.belongsTo(PostSchema, {
  foreignKey: 'idPost',
  targetKey: 'id',
});

export default PostSchema;
