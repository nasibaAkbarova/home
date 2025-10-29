import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Suspense fallback={<h2>Yuklanmoqda...</h2>}>
    <App />
    </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
