const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('../generated/prisma-client');

const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const Child = require('./resolvers/Child');
const SignInOut = require('./resolvers/SignInOut');
// const db = require('./db');

// Create GraphQL Yoga Server

function createServer() {
  return new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
      Mutation,
      Query,
      Child,
      SignInOut
    },
    context: { prisma }
  });
}

module.exports = createServer;
