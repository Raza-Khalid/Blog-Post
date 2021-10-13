const Router = require('express').Router()
const controller = require('../controllers/MessageBoard')

Router.get('/', controller.GetMessage)
Router.post('/', controller.CreateMessage)
Router.put('/:message_id', controller.UpdateMessage)
Router.delete('/:message_id', controller.DeleteMessage)

module.exports = Router
