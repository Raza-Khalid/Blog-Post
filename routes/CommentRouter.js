const Router = require('express').Router()
const controller = require('../controllers/CommentController')

Router.get('/:post_id', controller.GetComment)
Router.post('/add', controller.CreateComment)
Router.put('/update/:comment_id', controller.UpdateComment)
Router.delete('/:comment_id', controller.DeleteComment)

module.exports = Router