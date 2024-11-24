const bcrypt = require('bcryptjs');

const passwordHash = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}

const passwordCompare = (password, hashed) => {
  return bcrypt.compareSync(password, hashed);
}

module.exports = {
  passwordHash,
  passwordCompare
}