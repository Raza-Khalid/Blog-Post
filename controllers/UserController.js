const { User } = require('../models')

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { userName: req.body.userName },
      raw: true
    })
    {
      let payload = {
        id: user.id,
        userName: user.userName
      }
      return res.send({ user: payload })
    }
    // res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const GetUser = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const CreateUser = async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.send(user)
  } catch (error) {
    throw error
  }
}

const UpdateUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let updatedUser = await User.update(req.body, {
      where: { id: userId },
      returning: true
    })
    res.send(updatedUser)
  } catch (error) {
    throw error
  }
}

const DeleteUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    await User.destroy({ where: { id: userId } })
    res.send({ message: `Deleted User with an id of ${userId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  //   //USERS FUNCTIONS
  // GetProfiles,
  // GetUserProfile,
  GetUser,
  CreateUser,
  UpdateUser,
  DeleteUser,
  Login
}
