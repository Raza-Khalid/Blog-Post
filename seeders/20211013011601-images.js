'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'images',
      [
        {
          title: 'Mountains',
          url: 'https://i.imgur.com/9tJhpZ8.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'river',
          url: 'https://i.imgur.com/stbdVjS.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('images', null, {})
  }
}
