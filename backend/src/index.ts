import Koa from "koa";
import { ApolloServer, gql } from "apollo-server-koa";

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const apolloServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  const app = new Koa();
  server.applyMiddleware({ app, path: "/" });
  app.listen(3000);
};

apolloServer();
