import React from 'react'
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import './style/main.css'

import App from './App'
import { Provider as ApolloProvider } from './apollo/Provider'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ApolloProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
)
