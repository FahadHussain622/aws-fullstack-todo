import { ApolloProvider } from "@apollo/client"
import client from "./apolloClient"

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { Amplify } from "aws-amplify"
import awsconfig from "./aws-exports"

Amplify.configure(awsconfig)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)