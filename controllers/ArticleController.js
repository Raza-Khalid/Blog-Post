const { Article } = require('./../models')

const GetArticle = async (req, res) => {
  try {
    const article = await Article.findAll()
    res.send(article)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetArticle
}
