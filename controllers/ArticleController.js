const { Article } = require('./../models')

const GetArticle = async (req, res) => {
  try {
    const article = await Article.findAll()
    res.send(article)
  } catch (error) {
    throw error
  }
}

const CreateArticle = async (req, res) => {
  try {
    const article = await Article.create(req.body)
    res.send(article)
  } catch (error) {
    throw error
  }
}

const UpdateArticle = async (req, res) => {
  try {
    let articleId = parseInt(req.params.article_id)
    let updatedArticle = await Article.update(req.body, {
      where: { id: articleId },
      returning: true
    })
    res.send(updatedArticle)
  } catch (error) {
    throw error
  }
}

const DeleteArticle = async (req, res) => {
  try {
    let articleId = parseInt(req.params.article_id)
    await Article.destroy({ where: { id: articleId } })
    res.send({ message: `Deleted article with an id of ${articleId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetArticle,
  CreateArticle,
  UpdateArticle,
  DeleteArticle
}
