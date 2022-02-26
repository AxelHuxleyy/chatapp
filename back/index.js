const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./db/schema')
const resolvers = require('./db/resolvers')
require ('dotenv').config({path:'variables.env'})

const conectarDB = require('./config/db')

conectarDB();


const server = new ApolloServer({ typeDefs, resolvers });

//arrancar el servidor 

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });