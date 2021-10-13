const Router = require('express').Router()
const controller = require('../controllers/ArticleController')

Router.get('/', controller.GetArticle)

module.exports = Router
