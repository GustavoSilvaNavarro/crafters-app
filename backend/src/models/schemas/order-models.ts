import { DataTypes, Model, Optional } from 'sequelize';

import { sequelize } from '@/models/connectionDb';
import { IOrder } from '@/types/app-types';

export const OrderSchema = sequelize.define<Model<IOrder, Optional<IOrder, 'id'>>>('orders', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  total_price: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  total_quantity: {
    type: DataTypes.BIGINT,
    defaultValue: 1,
    allowNull: false,
  },
});

export default OrderSchema;
