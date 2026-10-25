import AnimalCard from "../components/AnimalCard";
import { useState } from "react";

function Home({ animales }) {
  const [busqueda, setBusqueda] = useState("");

  const filtrados = animales.filter(
    (a) =>
      a.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      a.especie.toLowerCase().includes(busqueda.toLowerCase()),
  );

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Encuentra a tu nuevo mejor amigo</h1>

      <input
        placeholder="Buscar por nombre"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="w-full rounded-lg border border-slate-300 px-4 py-2"
      />

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filtrados.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>

      {filtrados.length === 0 && (
  <p className="mt-4 text-slate-500">No se encontraron animales.</p>
)}
    </main>
  );
}

export default Home;
