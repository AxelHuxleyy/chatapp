const { gql } = require("apollo-server")


const typeDefsUser = gql`
type User {
    id: ID
    name: String
    lastName: String
    email: String
}


input UserInput{
    name: String
    lastName: String
    email: String
    password: String
}

type Query{
    "A simple Sttring"
    hello: String
    getUsers: [User]
}


type Mutation{
    # usuarios
    newUser(input: UserInput) : User
    
}
`
module.exports = typeDefsUser;