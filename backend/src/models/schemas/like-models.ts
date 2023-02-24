import { DataTypes, Model, Optional } from 'sequelize';

import { sequelize } from '@/models/connectionDb';
import { ILike } from '@/types/app-types';

export const LikeSchema = sequelize.define<Model<ILike, Optional<ILike, 'id'>>>('likes', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  like: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
});

export default LikeSchema;
