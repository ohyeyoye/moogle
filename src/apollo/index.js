import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://moogle-app.herokuapp.com",
});

export default client;
