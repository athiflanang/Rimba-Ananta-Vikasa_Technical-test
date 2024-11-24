'use strict';

const { passwordHash } = require('../helper/bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const userData = require('../data/dataUser.json')
    userData.forEach(el => {
      el.password = passwordHash(el.password)
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, { truncate: true, cascade: true, restartIdentity: true })
  }
};
