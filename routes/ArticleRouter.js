const Router = require('express').Router()
const controller = require('../controllers/ArticleController')


Router.get('/', controller.GetArticle)
Router.post('/', controller.CreateArticle)
Router.put('/:article_id', controller.UpdateArticle)
Router.delete('/:article_id', controller.DeleteArticle)


module.exports = Router
