import { DataTypes, Model, Optional } from 'sequelize';

import { sequelize } from '@/models/connectionDb';
import { PostSchema } from '@/models/schemas/post-models';
import { CommentSchema } from '@/models/schemas/comment-models';
import { WishListSchema } from '@/models/schemas/wishList-models';
import { OrderSchema } from '@/models/schemas/order-models';
import { LikeSchema } from '@/models/schemas/like-models';

import { IUser } from '@/types/app-types';

const UserSchema = sequelize.define<Model<IUser, Optional<IUser, 'id'>>>('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        msg: 'Enter a valid Email',
      },
    },
  },
  userPicUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  public_picture_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  auction_wins: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

//! Creating relations for the app
UserSchema.hasMany(PostSchema, {
  foreignKey: 'userEmail',
  sourceKey: 'email',
});

UserSchema.hasMany(CommentSchema, {
  foreignKey: 'idUser',
  sourceKey: 'id',
});

PostSchema.belongsTo(UserSchema, {
  foreignKey: 'userEmail',
  targetKey: 'email',
});

CommentSchema.belongsTo(UserSchema, {
  foreignKey: 'idUser',
  targetKey: 'id',
});

UserSchema.hasMany(WishListSchema, {
  foreignKey: 'idUser',
  sourceKey: 'id',
});

WishListSchema.belongsTo(UserSchema, {
  foreignKey: 'idUser',
  targetKey: 'id',
});

UserSchema.hasMany(OrderSchema, {
  foreignKey: 'idUser',
  sourceKey: 'id',
});

OrderSchema.belongsTo(UserSchema, {
  foreignKey: 'idUser',
  targetKey: 'id',
});

UserSchema.hasMany(LikeSchema, {
  foreignKey: 'idUser',
  sourceKey: 'id',
});

LikeSchema.belongsTo(UserSchema, {
  foreignKey: 'idUser',
  targetKey: 'id',
});

export default UserSchema;
