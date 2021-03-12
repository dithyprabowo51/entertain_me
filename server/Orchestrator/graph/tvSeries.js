const { gql } = require('apollo-server')
const axios = require('axios')

const typeDefTv = gql`
  type TvSeriesModel {
    _id: ID
    title: String
    overview: String
    poster_path: String
    popularity: Int
    tags: [String]
  }

  extend type Query {
    tvSeries: [TvSeriesModel]
  }
`

const resolverTvSeries = {
  Query: {
    tvSeries: async () => {
      try {
        const { data } = await axios({
          url: 'http://localhost:3002/tv',
          method: 'GET'
        })
        return data
      } catch (err) {
        console.log(err)
      }
    }
  }
}

module.exports = { typeDefTv, resolverTvSeries }