import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Detail from './pages/Detail.jsx'
import { useState } from 'react'
import { useEffect } from 'react'


function App() {
  const [animales, setAnimales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerAnimales = async () => {
      try{
        const respuesta = await fetch('http://localhost:3000/api/animales');

        if (!respuesta.ok) {
          throw new Error('No se pudo obtener la información del servidor');
        }

        const datos = await respuesta.json();
        setAnimales(datos);
      }catch(err){
        setError(err.message);
      }finally{
        setLoading(false);
      }
  }
  obtenerAnimales();
},[])

if (loading) {
    return <p>Cargando datos...</p>;
  }

  if (error) {
    return <p>Ocurrió un error: {error}</p>;
  }

  function adoptar(id) {
    setAnimales((prev) =>
      prev.map((a) => (a.id === id ? { ...a, adoptado: true } : a))
    )
  }

  function disponibles(){
    const animalitos = animales.filter((item) => item.adoptado === false)
    return animalitos.length;
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-emerald-50 text-slate-900">
        <Navbar disponibles={disponibles()}/>
        <Routes>
          <Route path="/" element={<Home animales={animales} />} />
          <Route path="/animal/:id" element={<Detail animales={animales} adoptar={adoptar} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
