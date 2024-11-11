import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../css/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const devMode = process.env.NODE_ENV === 'development'
if (devMode && module && module.hot) {
    module.hot.accept()
}
