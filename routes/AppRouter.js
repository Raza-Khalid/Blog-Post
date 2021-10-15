const Router = require('express').Router()

const UserRouter = require('./UserRouter')
const MessageBoardRouter = require('./MessageBoard')
const ArticleRouter = require('./ArticleRouter')
const ImageRouter = require('./ImagesRouter')
const CommentRouter = require('./CommentRouter')
Router.use('/users', UserRouter)
Router.use('/message_board', MessageBoardRouter)
Router.use('/articles', ArticleRouter)
Router.use('/images', ImageRouter)
Router.use('/comments', CommentRouter)

module.exports = Router
