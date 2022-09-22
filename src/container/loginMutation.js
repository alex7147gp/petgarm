import { gql, useMutation } from "@apollo/client"

const Login = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`

export const useLoginMutation = () => {
    const [loginMutation, { data: loginData, loading: loginLoading, error: loginError }] = useMutation(Login)

    return { loginMutation, loginData, loginLoading, loginError }

}
