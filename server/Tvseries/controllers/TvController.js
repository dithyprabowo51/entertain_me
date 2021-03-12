const Tv = require('../models/tv.js')

class TvController {

  static async getTv(req, res, next) {
    try {
      const tv = await Tv.findAll()
      res.status(200).json(tv)
    } catch (err) {
      next(err)
    }
  }

  static async getTvById(req, res, next) {
    try {
      const { id } = req.params
      const tv = await Tv.findById(id)
      res.status(200).json(tv)
    } catch (err) {
      next(err)
    }
  }

  static async addTv(req, res, next) {
    try {
      const { title, overview, poster_path, popularity, tags } = req.body
      if (!title) {
        throw 400
      }
      const tv = new Tv(title, overview, poster_path, popularity, tags)
      const newTv = await tv.save()
      res.status(201).json('Add new tv series successfully')
    } catch (err) {
      next(err)
    }
  }

  static async updateTv(req, res, next) {
    try {
      const id = req.params.id
      const { title, overview, poster_path, popularity, tags } = req.body
      await Tv.update({
        title, overview, poster_path, popularity, tags
      }, id)
      res.status(200).json('Updated movie successfully')
    } catch (err) {
      next(err)
    }
  }

  static async deleteTv(req, res, next) {
    try {
      const id = req.params.id
      await Tv.destroy(id)
      res.status(200).json('Delete movie successfully')
    } catch (err) {
      next(err)
    }
  }
}

module.exports = TvController