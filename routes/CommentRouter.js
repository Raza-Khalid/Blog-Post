const Router = require('express').Router()
const controller = require('../controllers/CommentController')

Router.get('/', controller.GetComment)
Router.post('/', controller.CreateComment)
Router.put('/:comment_id', controller.UpdateComment)
Router.delete('/:comment_id', controller.DeleteComment)

module.exports = Router
