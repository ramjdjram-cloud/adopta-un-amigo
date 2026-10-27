import { Link } from 'react-router-dom'

function Navbar({disponibles}) {
  return (
    <header className="bg-emerald-600 text-white shadow-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <p className="rounded-full bg-white/20 p-2">Actualmente quedan en adopción {disponibles} animales</p>
        <Link to="/" className="text-2xl font-bold tracking-tight">
          🐾 Adopta un Amigo
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
