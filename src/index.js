import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app.js'
import Context from './context.js'
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
  from,
  HttpLink
  } from '@apollo/client'

import { onError } from '@apollo/client/link/error'

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token');

  if (token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`
      }
    })
  }
    return forward(operation)
})  

const errorMiddleware = onError(
  ({ networkError }) => {
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.remmoveItem('token')
      window.location = '/profile'
    }
  }
)

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    errorMiddleware,
    authMiddleware,
    new HttpLink({
      uri: 'https://petgram-server-jcc.vercel.app/graphql'
    })
  ])
})

const container = document.getElementById('app')

const root = createRoot(container)

root.render(
  <ApolloProvider client={client}>
    <Context.Provider>
      <App tab="home"/>
    </Context.Provider>
  </ApolloProvider>
)
