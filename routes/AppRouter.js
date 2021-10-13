const Router = require('express').Router()

const MessageBoardRouter = require('./MessageBoard')
const ArticleRouter = require('./ArticleRouter')
const ImageRouter = require('./ImagesRouter')
Router.use('/message_board', MessageBoardRouter)
Router.use('/articles', ArticleRouter)
Router.use('/images', ImageRouter)

module.exports = Router
