const { Images } = require('./../models')

const GetImages = async (req, res) => {
  try {
    const images = await Images.findAll()
    res.send(images)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetImages
}
