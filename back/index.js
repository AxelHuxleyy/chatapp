const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./db/schema')
const resolvers = require('./db/resolvers')
require ('dotenv').config({path:'variables.env'})
const jwt = require("jsonwebtoken")

const conectarDB = require('./config/db')

conectarDB();


const server = new ApolloServer({ 
  typeDefs,
  resolvers,
  context: ({req}) => {
    const token = req.headers['authorization']
    if(token){
      try {
        const user = jwt.verify(token.replace("Bearer ", ""), process.env.SECRETA )
        const { _doc: onlyuser} = user
        return {
          onlyuser
        }
      } catch (error) {
          console.log(error)
      }
    }
  }
 });

//arrancar el servidor 

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });