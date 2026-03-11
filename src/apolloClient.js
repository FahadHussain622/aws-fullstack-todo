import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
  uri: "https://tjkxyrmeknhk7esba3snjb6l3q.appsync-api.us-east-1.amazonaws.com/graphql",
  }),
  cache: new InMemoryCache(),
});

export default client;