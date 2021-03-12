const { ApolloServer, gql } = require('apollo-server')
const axios = require('axios')

const typeDefs = gql`
  type movie {
    _id: ID
    title: String
    overview: String
    poster_path: String
    popularity: Int
    tags: [String]
  }

  type Query {
    movies: [movie]
  }
`

const resolvers = {
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
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})