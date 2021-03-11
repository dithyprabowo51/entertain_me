const Movie = require('../models/movie.js')

class MovieController {

  static async getMovies(req, res, next) {
    try {
      const movies = await Movie.findAll()
      res.status(200).json(movies)
    } catch (err) {
      next(err)
    }
  }

  static async getMovie(req, res, next) {
    try {
      const { id } = req.params
      const movie = await Movie.findById(id)
      res.status(200).json(movie)
    } catch (err) {
      next(err)
    }
  }

  static async addMovie(req, res, next) {
    try {
      const { title, overview, poster_path, popularity, tags } = req.body
      if (!title) {
        throw 400
      }
      const movie = new Movie(title, overview, poster_path, popularity, tags)
      const newMovie = await movie.save()
      res.status(201).json(newMovie)
    } catch (err) {
      next(err)
    }
  }

  static async updateMovie(req, res, next) {
    try {
      const id = req.params.id
      const { title, overview, poster_path, popularity, tags } = req.body
      const updatedMovie = await Movie.update({
        title, overview, poster_path, popularity, tags
      }, id)
      res.status(200).json('Updated movie successfully')
    } catch (err) {
      next(err)
    }
  }

  static async deleteMovie(req, res, next) {
    try {
      const id = req.params.id
      await Movie.destroy(id)
      res.status(200).json('Delete movie successfully')
    } catch (err) {
      next(err)
    }
  }
}

module.exports = MovieController