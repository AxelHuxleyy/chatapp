const { gql } = require("apollo-server")


const typeDefsUser = gql`

type Query{
    "A simple Sttring"
    hello: String
    getUsers: [User]
}

`
module.exports = typeDefsUser;