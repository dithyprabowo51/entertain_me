const { ApolloServer, gql } = require('apollo-server')
const { typeDefMovies, resolverMovie } = require('./graph/movies.js')
const { typeDefTv, resolverTvSeries } = require('./graph/tvSeries.js')

const server = new ApolloServer({ typeDefs: [typeDefMovies, typeDefTv], resolvers: [resolverMovie, resolverTvSeries] })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})