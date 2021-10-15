const { Comment } = require('../models')

const GetComment = async (req, res) => {
  try {
    const comment = await Comment.findAll()
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const CreateComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body)
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const UpdateComment = async (req, res) => {
  try {
    let comment_id = parseInt(req.params.comment_id)
    let updatedComment = await Comment.update(req.body, {
      where: { id: comment_id },
      returning: true
    })
    res.send(updatedComment)
  } catch (error) {
    throw error
  }
}

const DeleteComment = async (req, res) => {
  try {
    let commentId = parseInt(req.params.comment_id)
    await Comment.destroy({ where: { id: commentId } })
    res.send({ message: `Deleted Comment with an id of ${commentId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetComment,
  CreateComment,
  UpdateComment,
  DeleteComment
}
