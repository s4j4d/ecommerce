'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Seller.belongsTo(models.User)
      Seller.belongsTo(models.ProductDetail)
    }
  }
  Seller.init({
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    owner: {
      type: DataTypes.INTEGER,
      reference: {
        model: 'User',
        key: 'id'
      }
    },
    Shopname: DataTypes.STRING,
    satisfactionrate: {
      type: DataTypes.FLOAT,
      validate: {
        max: 100,
        min: 0
      }
    },
    rejectionrate: {
      type: DataTypes.FLOAT,
      validate: {
        max: 100,
        min: 0
      }
    },
    reliability: {
      type: DataTypes.FLOAT,
      validate: {
        max: 100,
        min: 0
      }
    },
    sendontimerate: {
      type: DataTypes.FLOAT,
      validate: {
        max: 100,
        min: 0
      }
    },
    performance: {
      type: DataTypes.VIRTUAL,
      get() {
        return (this.rejectionrate * 0.3 + this.reliability * 0.4 + this.sendontimerate * 0.3) / 100 * 5
      }
    },
    price: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    ProductDetailId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ProductDetail',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Seller',
  });
  return Seller;
};