const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.GetUser)
Router.post('/', controller.CreateUser)
Router.put('/:user_id', controller.UpdateUser)
Router.delete('/:user_id', controller.DeleteUser)
Router.post('/login', controller.Login)

module.exports = Router
