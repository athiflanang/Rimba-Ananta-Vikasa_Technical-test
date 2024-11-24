const { where } = require('sequelize');
const { verifyToken } = require('../helper/jwt');
const { User } = require('../models');

const authenticate = async (req, res, next) => {
  try {
    const { autohorization } = req.headers;

    if (!autohorization) {
      throw { name: "Unauthorized" };
    }

    const access_token = autohorization.split(" ")[1];
    const payload = verifyToken(access_token);

    const userVerified = await User.findOne({
      where: {
        email: payload.email
      }
    });

    if (!userVerified) {
      throw { name: "Unauthorized" };
    }

    req.loginInfo = {
      name: userVerified.name,
      email: userVerified.email
    }
  } catch (error) {

  }
};

module.exports = authenticate;