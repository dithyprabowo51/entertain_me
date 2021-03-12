const axios = require('axios')

const axiosMovies = axios.create({
  baseURL: 'http://localhost:3001'
})
const axiosTv = axios.create({
  baseURL: 'http://localhost:3002'
})

module.exports = { axiosMovies, axiosTv }