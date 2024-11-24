'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Transaction, {
        foreignKey: "transactionId"
      })
    }
  }
  Product.init({
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Product name has already been taken"
      },
      validate: {
        notNull: {
          msg: "Product name is required"
        },
        notEmpty: {
          msg: "Product name is required"
        }
      },
    },
    date: {
      type: DataTypes.STRING,
    },
    productCode: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Price is required"
        },
        notEmpty: {
          msg: "Price is required"
        },
        min: {
          args: 150000,
          msg: "Minimum price is Rp. 150.000"
        }
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Quantity is required"
        },
        notEmpty: {
          msg: "Quantity is required"
        },
        min: {
          args: 10,
          msg: "Minimum quantity is 10"
        }
      },
    },
    Transaction: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};