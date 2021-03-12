const Redis = require('ioredis')
const redis = new Redis();
const Movie = require('../models/movie.js')
const Tv = require('../models/tvSeries.js')

class OrchestratorController {
  static async findAll(req, res, next) {
    try {
      const data = {
        movies: [],
        tvSeries: []
      }
      const moviesRedis = await redis.get('movies')
      const tvRedis = await redis.get('tv')
      if (moviesRedis) {
        console.log('movie dari redis')
        data.movies = JSON.parse(moviesRedis)
      } else {
        console.log('movie dari db')
        const dataMovies = await Movie.findAll()
        data.movies = dataMovies.data
        await redis.set('movies', JSON.stringify(dataMovies.data))
      }

      if (tvRedis) {
        console.log('tv dari redis')
        data.tvSeries = JSON.parse(tvRedis)
      } else {
        console.log('tv dari db')
        const dataTvSeries = await Tv.findAll()
        data.tvSeries = dataTvSeries.data
        await redis.set('tv', JSON.stringify(dataTvSeries.data))
      }
      res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = OrchestratorController