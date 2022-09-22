import { gql, useMutation } from "@apollo/client"

const Register = gql`
mutation signup($input: UserCredentials!) {
    signup (input: $input)
  }
`

export const useRegisterMutation = () => {
  const [registerMutation, { data, loading, error }] = useMutation(Register)

  return { registerMutation, data, loading, error }
}
