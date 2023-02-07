const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./schemas/resolvers');
const { authMiddleware } = require('./utils/auth');

const db = require('./config/connection');
const routes = require('./routes');



const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);


const apolloServer = new ApolloServer({ typeDefs, resolvers })

db.once('open', async () => {
  await apolloServer.start()

  app.use(expressMiddleware(apolloServer))
  console.log(`Apollo graphql playground at http://localhost:${PORT}/graphql`)

  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
