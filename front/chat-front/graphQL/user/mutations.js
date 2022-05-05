import gql from "graphql-tag"

export const NEW_USER = gql`
  mutation newUser($input: UserInput) {
  newUser(input: $input) {
    name
    email
    lastName
  }
}
`

export const LOGIN = gql`
mutation Login($input: LoginInput) {
  Login(input: $input) {
    token
  }
}
`


export const NEW_MESSAGE = gql`
mutation NewMessage($input: MessageInput) {
  newMessage(input: $input)
}
`