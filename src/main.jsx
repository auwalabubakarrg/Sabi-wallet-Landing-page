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

const enableApiMocks = import.meta.env.DEV && import.meta.env.VITE_ENABLE_API_MOCKS === 'true'

if (enableApiMocks) {
  startMockServer()
}
