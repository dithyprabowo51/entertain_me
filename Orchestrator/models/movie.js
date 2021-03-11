const { axiosMovies } = require('../lib/axios.js')

class Movie {
  static findAll() {
    return axiosMovies({
      url: '/movies',
      method: 'GET'
    })
  }
}

module.exports = Movie