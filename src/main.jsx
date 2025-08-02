import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles/index.css'        // ✅ updated path
import App from './Components/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
