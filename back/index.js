const { ApolloServer, gql } = require("apollo-server")
const jwt = require("jsonwebtoken")
const typeDefs = require('./db/schema')
const resolvers = require('./db/resolvers')
require ('dotenv').config({path:'variables.env'})

const conectarDB = require('./config/db')

conectarDB();


const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen({port: process.env.PORT || 4000}).then(({url})=>{
    console.log(url)
})