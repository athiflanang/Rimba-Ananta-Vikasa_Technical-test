'use strict';
const {
  Model
} = require('sequelize');
const { passwordHash } = require('../helper/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Email has already been taken"
      },
      validate: {
        isEmail: {
          msg: "Email format is incorrect"
        },
        notNull: {
          msg: "Email is required"
        }
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Name is required"
        },
        notEmpty: {
          msg: "Name is required"
        }
      },
    },

    phoneNumber: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Password is required"
        },
        notEmpty: {
          msg: "Password is required"
        }
      },
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((el) => {
    el.password = passwordHash(el.password);
  });
  return User;
};