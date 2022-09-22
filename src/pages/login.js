import React, { useContext, useState } from 'react'
import { UserForm, RegisterForm } from '../components/userForm'
import Context from '../context'
import { useRegisterMutation } from '../container/registerMutation'
import { useLoginMutation } from '../container/loginMutation'

export const Login = () => {

  const [estado, setEstado] = useState(true)

  const { registerMutation, data, loading, error } = useRegisterMutation()
  const { loginMutation, loginData, loginLoading, loginError } = useLoginMutation()
  
  return (
    <Context.Consumer>
      {
        ({ activateAuth }) => {
          const onSubmit = ({ email, password }) => {
            const input = {
              "email": email.value,
              "password": password.value 
            }
            const variables = { input }
            registerMutation({ variables })
            .then(({ data }) => {
              const { signup } = data
              activateAuth(signup)
            })
          }
            
          const errorMsg = error && 'El usuario ya existe o hay algun problema.'
 
          const onSubmitL = ({ email, password }) => {
            const input = {
              "email": email.value,
              "password": password.value
            }
            const variables = { input }
            loginMutation({ variables })
            .then(({ data }) => {
              const { login } = data
              activateAuth(login)
            })
          }
          
          const errorMsgL = loginError && 'email o contraseña incorecta'
          
          return (
            <>
              {
                estado ? <RegisterForm onSubmit={onSubmit} error={errorMsg} disabled={loading} title={estado} setEstado={setEstado} />
                : <UserForm onSubmitL={onSubmitL} error={errorMsgL} disabled={loginLoading} title={estado} setEstado={setEstado} />
              }
            </>
            
          )
        }
      }
    </Context.Consumer>
  )
}

