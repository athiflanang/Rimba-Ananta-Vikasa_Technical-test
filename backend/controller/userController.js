const { User } = require('../models');
const { where } = require('sequelize')
const { passwordHash, passwordCompare } = require('../helper/bcrypt');
const { signToken, verifyToken } = require('../helper/jwt');

class userController {
  static async login(req, res, next) {
    try {
      const { username, email, password } = req.body
      if (!username || !email || !password) throw { name: "InvalidLogin" }

      const loginUser = await User.findOne({
        where: {
          username,
          email
        }
      })

      if (!loginUser) throw { name: 'LoginError' }
      if (!compare(password, loginUser.password)) throw { name: 'LoginError' }

      const payload = {
        email: loginUser.email,
        name: loginUser.name
      }

      const access_token = signToken(payload)
      res.status(200).json({
        message: "Login success",
        success: true,
        access_token
      })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = userController;