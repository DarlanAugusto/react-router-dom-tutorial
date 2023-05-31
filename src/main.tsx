import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'

// Componentes
import { Home } from './components/Home'
import { About } from './components/About'

// Rotas
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
