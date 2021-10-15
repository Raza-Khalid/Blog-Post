'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('articles', 'userId', {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('articles', 'userId', {
      type: Sequelize.INTEGER
    })
  }
}
