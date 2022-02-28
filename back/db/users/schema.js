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

type Token{
    token: String
}

input LoginInput{
    email: String
    password: String
}


type Mutation{
    # usuarios
    newUser(input: UserInput) : User
    Login(input: LoginInput) : Token
    
}
`
module.exports = typeDefsUser;