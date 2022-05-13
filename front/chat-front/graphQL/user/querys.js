import gql from "graphql-tag"

export const GET_USERS = gql`
  query getUsers {
  getUsers {
    id
    name
    lastName
  }
}
`

export const GET_MY_CONVERSATION = gql`
query GetMyConversations {
  getMyConversations {
    id
    message
    sender {
      name
      lastName
      email
      id
    }
    conversation {
      id
      members {
        id
        name
        lastName
        email
      }
    }
    createdAt
  }
}
`

export const AUTH_ME = gql`
query AuthMe {
  authMe {
    id
    name
    lastName
    email
  }
}
`

export const GET_MY_MESSAGE = gql`
  query GetMyMessage($input: getMyMessageInput) {
  getMyMessage(input: $input) {
    id
    message
    sender
    createdAt
  }
}
`


export const IS_ALREADY_CONVERSATION = gql`
  query Query($user: ID!) {
    isAlreadyConversation(user: $user)
  }
`