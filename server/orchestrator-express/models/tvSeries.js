const { axiosTv } = require('../lib/axios.js')

class Tv {
  static findAll() {
    return axiosTv({
      url: '/tv',
      method: 'GET'
    })
  }
}

module.exports = Tv