const {MessageBoard} = require ("../models")

const GetMessage = async (req, res) => {
  try {
    const messages = await MessageBoard.findAll()
    res.send(messages)
  } catch (error) {
    throw error
  }
}

const CreateMessage = async (req, res) => {
  try {
    const message = await MessageBoard.create(req.body)
    res.send(message)
  } catch (error) {
    throw error
  }
}

const UpdateMessage = async (req, res) => {
  try {
    let message_id = parseInt(req.params.message_id)
    let updatedMessage = await MessageBoard.update(req.body, {
      where: { id: message_id },
      returning: true
    })
    res.send(updatedMessage)
  } catch (error) {
    throw error
  }
}

const DeleteMessage = async (req, res) => {
  try {
    await MessageBoard.destroy({
      where: { id: req.params.message_id }
    })
    res.send({ msg: 'message deleted' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetMessage,
  CreateMessage,
  UpdateMessage,
  DeleteMessage
}
