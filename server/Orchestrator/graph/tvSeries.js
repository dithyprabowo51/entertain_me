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
    tv(id: ID!): TvSeriesModel
  }

  extend type Mutation {
    addTvSeries(title: String, overview: String, poster_path: String, popularity: Int, tags: [String]) : String

    updateTvSeries(id: ID!, title: String, overview: String, poster_path: String, popularity: Int, tags: [String]) : String

    deleteTvSeries(id: ID!) : String
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
    },
    tv: async (parent, args) => {
      try {
        const { data } = await axios({
          url: 'http://localhost:3002/tv/' + args.id,
          method: 'GET'
        })
        return data
      } catch (err) {
        console.log(err)
      }
    }
  },

  Mutation: {
    addTvSeries: async (parent, args) => {
      try {
        const { data } = await axios({
          url: 'http://localhost:3002/tv',
          method: 'POST',
          data: args
        })
        return data
      } catch (err) {
        console.log(err)
      }
    },
    updateTvSeries: async (parent, args) => {
      try {
        const { data } = await axios({
          url: 'http://localhost:3002/tv/' + args.id,
          method: 'PUT',
          data: {
            title: args.title,
            overview: args.overview,
            poster_path: args.poster_path,
            popularity: args.popularity,
            tags: args.tags
          }
        })
        return data
      } catch (err) {
        console.log(err)
      }
    },
    deleteTvSeries: async (parent, args) => {
      try {
        const { data } = await axios({
          url: 'http://localhost:3002/tv/' + args.id,
          method: 'DELETE'
        })
        return data
      } catch (err) {
        console.log(err)
      }
    }
  }
}

module.exports = { typeDefTv, resolverTvSeries }