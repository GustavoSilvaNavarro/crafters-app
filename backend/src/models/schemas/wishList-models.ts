import { DataTypes, Model, Optional } from 'sequelize';

import { sequelize } from '@/models/connectionDb';

import { IWishList } from '@/types/app-types';

export const WishListSchema = sequelize.define<Model<IWishList, Optional<IWishList, 'id'>>>('wishlist', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  wishlist: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
});

export default WishListSchema;
