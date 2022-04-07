"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const apollo_server_koa_1 = require("apollo-server-koa");
const typeDefs = (0, apollo_server_koa_1.gql) `
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
    const server = new apollo_server_koa_1.ApolloServer({ typeDefs, resolvers });
    await server.start();
    const app = new koa_1.default();
    server.applyMiddleware({ app, path: "/" });
    app.listen(3000);
};
apolloServer();
//# sourceMappingURL=index.js.map