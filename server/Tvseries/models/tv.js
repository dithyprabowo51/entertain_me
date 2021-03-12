const { getDb } = require('../config/mongodb.js')
const { ObjectID } = require('bson')

class Tv {
  constructor(title, overview, poster_path, popularity, tags = []) {
    this.title = title
    this.overview = overview
    this.poster_path = poster_path
    this.popularity = popularity
    this.tags = tags
  }

  async save() {
    const moviesCollection = await getDb().collection('tv_series')
    return moviesCollection.insertOne(this)
  }

  static async findAll() {
    try {
      const moviesCollection = await getDb().collection('tv_series')
      return moviesCollection.find().toArray()
    } catch (err) {
      console.log(err)
    }
  }

  static async findById(id) {
    try {
      const moviesCollection = await getDb().collection('tv_series')
      return moviesCollection.find({
        _id: ObjectID(id)
      }).toArray()
    } catch (err) {
      console.log(err)
    }
  }

  static async update(data, id) {
    try {
      const moviesCollection = await getDb().collection('tv_series')
      const filter = { _id: ObjectID(id) }
      const updateDoc = {
        $set: {
          title: data.title,
          overview: data.overview,
          poster_path: data.poster_path,
          popularity: data.popularity,
          tags: data.tags
        },
      }
      return moviesCollection.updateOne(filter, updateDoc)
    } catch (err) {
      console.log(err)
    }
  }

  static async destroy(id) {
    try {
      const moviesCollection = await getDb().collection('tv_series')
      const filter = { _id: ObjectID(id) }
      return moviesCollection.deleteOne(filter)
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = Tv