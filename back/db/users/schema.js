const { gql } = require("apollo-server")


const typeDefsUser = gql`
#types user
type User {
    id: ID
    name: String
    lastName: String
    email: String
}

#queries Message
type Message{
    id: ID
    message: String
    sender: ID
    createdAt: String
    conversation: ID
}


#queries Conversation
type Conversation{
    id: ID
    members: [User]

}

#queries MessageConversation
type MessageConversation{
    id: ID
    message: String
    sender: User
    conversation: Conversation
    createdAt: String
}

#inputs user
input UserInput{
    name: String
    lastName: String
    email: String
    password: String
}

input LoginInput{
    email: String
    password: String
}


#conversationInput
input ConversationInput{
    user: ID
}

#messageInput
input MessageInput{
    message: String
    userId: ID
}

input getMyMessageInput{
    idConversation: ID
}

type Token{
    token: String
}
type Query{
    "A simple Sttring"
    hello: String
    getUsers: [User]
    getMyConversations: [MessageConversation]
    getMyMessage(input: getMyMessageInput) : [Message]
    authMe: User
    isAlreadyConversation(user: ID!): ID
}

type Mutation{
    # usuarios
    newUser(input: UserInput) : User
    Login(input: LoginInput) : Token
    newConversation(input: ConversationInput) : String
    newMessage(input: MessageInput) : Message
}
`
module.exports = typeDefsUser;