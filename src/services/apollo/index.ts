import { ApolloClient, gql, InMemoryCache } from '@apollo/client'

const typeDefs = gql`
  scalar Address
  scalar Bytes
  scalar Uint256
`
export const client = new ApolloClient({
  uri: process.env.GRAPHQL_SERVER_URL || 'https://shoyunft-graphql-server.herokuapp.com/',
  cache: new InMemoryCache(),
  typeDefs,
})

export * from './queries'
export * from './mutations'
