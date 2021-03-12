const Tv = require('../models/tv.js')

const checkId = async (req, res, next) => {
  try {
    const id = req.params.id
    if (!id || id.length !== 24) throw 404
    const tv = await Tv.findById(id)
    if (tv.length === 0 || !tv) throw 404
    next()
  } catch (err) {
    next(err)
  }
}

module.exports = checkId