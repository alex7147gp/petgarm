import React, { useState } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import styled from 'styled-components'
import { Layaut } from '../layaut'

const Form = styled.form`
  padding: 16px 18px;
`

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: .3;
  }
`
const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  &[disabled] {
    opacity: .3;
  }
  `
const Wrapper = styled.p`
  margin: 10px;
  align-items: center;
  justify-content: center;
`
const Error = styled.span`
  color: red;
  font-size: 14px;
`

export const UserForm = ({ onSubmitL, title, setEstado, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmitL({ email, password })
  }
  return (
    <Layaut title="Iniciar secion" subtitle="Inicia sesion con tu cuenta de Patgram y descubre el increible mundo de las mascotas">
      <Form onSubmit={handleSubmit}>
        <Input placeholder='email' disabled={disabled} {...email} />
        <Input placeholder='password' disabled={disabled} type='password' {...password} />
        <Button disabled={disabled}>
          Iniciar sesion
        </Button>
      </Form>
      {error && <Error>{error}</Error>}
      <div>
        <Wrapper>
          ¿No tienes cuenta?
        </Wrapper>
        <button onClick={() => setEstado(!title)} disabled={disabled}>
          <p style={{ color: 'blue', fontSize: '18px' }}>Registrate</p>
        </button>
      </div>

    </Layaut>
  )
}
export const RegisterForm = ({ onSubmit, title, setEstado, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email, password })
  }
  return (
    <Layaut title="Registrate" subtitle="Registrate y descubre el increible mundo de las mascotas">
      <Form onSubmit={handleSubmit}>
        <Input placeholder='name' disabled={disabled} />
        <Input placeholder='phone' type='number' disabled={disabled} />
        <Input placeholder='email' {...email} disabled={disabled} />
        <Input placeholder='password' type='password' {...password} disabled={disabled} />
        <Button disabled={disabled}>
          <p>
            Regitrarme
          </p>
        </Button>
      </Form>
      {
        error && <Error>{error}</Error>
      }
      <div>
        <Wrapper>
          ¿Ya tienes una cuenta?
        </Wrapper>
        <button onClick={() => setEstado(!title)} disabled={disabled}>
          <p style={{ color: 'blue', fontSize: '18px' }}>Inicia sesion</p>
        </button>
      </div>

    </Layaut>
  )
}
