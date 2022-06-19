const { gql, ApolloServer } = require('apollo-server');
const PORT = 9000;

const typeDefs = gql`
  type Query {
    greeting: String
  }
`;

const resolvers = {
  Query: {
    greeting: () => 'Hello GraphQL !',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen({ port: PORT }).then((serverInfo) => {
  console.log(`Server running at ${serverInfo.url}`);
});
