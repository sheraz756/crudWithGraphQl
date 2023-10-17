const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./graphQl/schema');
const resolvers = require('./graphQl/resolver');
require('dotenv').config({path:'./.env'})
const connect = require('./Db/index')
const app = express();
const cache = require('./routes/cacheRoutes')
const errorHandler = require('./middleware/errorHandle');


const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

//errorHandle middlerware
app.use(errorHandler);
//apolloServer middlerware
  server.applyMiddleware({ app });
  //cache middlerware
app.use('/api',cache)
//dbConnected
connect()

  // server Start
  const PORT =  4000;
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}${server.graphqlPath}`);
  });
};

startServer();
