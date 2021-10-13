'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'articles',
      [
        {
          title: 'Sad and Happy People',
          content:
            'There are people waiting for delivery of a new car, or to stay in a popular airbnb or to buy a limited edition jigsaw puzzle.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Join Bootcamp',
          content:
            'If you’re ready to swap yourself to a different spot on the list, simply enter how much you’re willing to pay to go how far on the list.',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('articles', null, {})
  }
}
