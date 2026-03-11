import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: "https://tjkxyrmeknhk7esba3snjb6l3q.appsync-api.us-east-1.amazonaws.com/graphql",
  cache: new InMemoryCache()
})

export default client