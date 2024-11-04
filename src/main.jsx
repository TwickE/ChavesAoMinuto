import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HashRouter> {/* Change to BrowserRouter when deploying to real server */}
            <App />
        </HashRouter>
    </StrictMode>,
)