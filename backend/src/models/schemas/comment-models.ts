import { DataTypes, Model, Optional } from 'sequelize';

import { sequelize } from '@/models/connectionDb';
import { IComment } from '@/types/app-types';

export const CommentSchema = sequelize.define<Model<IComment, Optional<IComment, 'id'>>>('comments', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default CommentSchema;
