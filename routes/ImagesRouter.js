const Router = require('express').Router()
const controller = require('../controllers/ImagesController')

Router.get('/', controller.GetImages)

module.exports = Router
