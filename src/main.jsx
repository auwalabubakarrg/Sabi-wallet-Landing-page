import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { startMockServer } from './mocks/apiMocks'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Initialize local API mocks during development so fetch calls resolve reliably.
if (import.meta.env.DEV) {
  startMockServer()
}
