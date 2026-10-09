import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Detail from './pages/Detail.jsx'
import { useState } from 'react'
import animalesIniciales from './data/animales.js'

function App() {
  const [animales, setAnimales] = useState(animalesIniciales);

  function adoptar(id) {
    setAnimales((prev) =>
      prev.map((a) => (a.id === id ? { ...a, adoptado: true } : a))
    )
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-emerald-50 text-slate-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home animales={animales} />} />
          <Route path="/animal/:id" element={<Detail animales={animales} adoptar={adoptar} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
