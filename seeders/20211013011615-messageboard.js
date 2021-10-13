'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'message_boards',
      [
        {
          content: 'I love the article about happy and sad people',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          content: 'man those mountains remind me of home',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('message_boards', null, {})
  }
}
