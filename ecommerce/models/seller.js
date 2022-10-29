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
      // define association here
    }
  }
  Seller.init({
    Shopname:DataTypes.STRING,
    owner:{
      type:DataTypes.INTEGER,
      reference:{
        model:'User',
        key:'id'
      }
    },
    satisfactionrate: {type:DataTypes.FLOAT,
      validate:{
        max:100,
        min:0
      }},
      rejectionrate: {type:DataTypes.FLOAT,
    validate:{
      max:100,
      min:0
    }},
    reliability:{type:DataTypes.FLOAT,
      validate:{
        max:100,
        min:0
      }},
      sendontimerate:{ type:DataTypes.FLOAT,
      validate:{
        max:100,
        min:0
      }},
      performance:{
        type:DataTypes.VIRTUAL,
        get(){
          return (this.rejectionrate*0.3+this.reliability*0.4+this.sendontimerate*0.3)/100*5
        }
      },
  }, {
    sequelize,
    modelName: 'Seller',
  });
  return Seller;
};