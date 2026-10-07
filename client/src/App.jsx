import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Detail from './pages/Detail.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-emerald-50 text-slate-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animal/:id" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
