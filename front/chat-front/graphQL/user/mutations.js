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