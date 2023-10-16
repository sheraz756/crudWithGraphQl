const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphQl/schema');
const resolvers = require('./graphQl/resolver');
require('dotenv').config({path:'./.env'})
const connect = require('./Db/index')
const app = express();

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  server.applyMiddleware({ app });

//dbConnected
connect()

  // server Start
  const PORT =  4000;
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}${server.graphqlPath}`);
  });
};

startServer();
