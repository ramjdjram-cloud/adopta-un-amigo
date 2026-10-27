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
      <h1 className="text-3xl font-bold mb-4 bg-linear-to-r from-lime-500 from-10% via-lime-700 via-30% to-emerald-500 to-90% rounded-2xl p-8 text-white">Encuentra a tu nuevo mejor amigo</h1>

      <input
        placeholder="Buscar por nombre"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="w-full rounded-lg border border-slate-300 px-4 py-2"
      />

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4" >
        {filtrados.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} className="bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300" />
        ))}
      </div>

      {filtrados.length === 0 && (
  <p className="mt-4 text-slate-500">No se encontraron animales.</p>
)}
    </main>
  );
}

export default Home;
