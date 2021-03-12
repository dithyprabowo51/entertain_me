const { gql } = require('apollo-server')
const axios = require('axios')

const typeDefMovies = gql`
  type MovieModel {
    _id: ID
    title: String
    overview: String
    poster_path: String
    popularity: Int
    tags: [String]
  }

  type Query {
    movies: [MovieModel]
    movie(id: ID!): MovieModel
  }

  type Mutation {
    addMovie(title: String, overview: String, poster_path: String, popularity: Int, tags: [String]) : String

    updateMovie(id: ID!, title: String, overview: String, poster_path: String, popularity: Int, tags: [String]) : String
    
    deleteMovie(id: ID!) : String
  }
`

const resolverMovie = {
  Query: {
    movies: async () => {
      try {
        const { data } = await axios({
          url: 'http://localhost:3001/movies',
          method: 'GET'
        })
        return data
      } catch (err) {
        console.log(err)
      }
    },
    movie: async (parent, args) => {
      try {
        const { data } = await axios({
          url: 'http://localhost:3001/movies/' + args.id,
          method: 'GET'
        })
        return data
      } catch (err) {
        console.log(err)
      }
    }
  },

  Mutation: {
    addMovie: async (parent, args) => {
      try {
        const { data } = await axios({
          url: 'http://localhost:3001/movies',
          method: 'POST',
          data: args
        })
        return data
      } catch (err) {
        console.log(err)
      }
    },
    updateMovie: async (parent, args) => {
      try {
        const { data } = await axios({
          url: 'http://localhost:3001/movies/' + args.id,
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
    deleteMovie: async (parent, args) => {
      try {
        const { data } = await axios({
          url: 'http://localhost:3001/movies/' + args.id,
          method: 'DELETE'
        })
        return data
      } catch (err) {
        console.log(err)
      }
    }
  }
}

module.exports = { typeDefMovies, resolverMovie }