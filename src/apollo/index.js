import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://movie-api-graphql.herokuapp.com",
});

export default client;
