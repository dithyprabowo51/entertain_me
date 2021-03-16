const Movie = require('../models/movie.js')

const checkId = async (req, res, next) => {
  try {
    const id = req.params.id
    if (!id || id.length !== 24) throw 404
    const movie = await Movie.findById(id)
    if (movie.length === 0 || !movie) throw 404
    next()
  } catch (err) {
    next(err)
  }
}

module.exports = checkId