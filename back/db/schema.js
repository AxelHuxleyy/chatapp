const { gql } = require("apollo-server")
const typeDefsUser = require("./users/schema")

const typeDefs = typeDefsUser;

module.exports = typeDefs