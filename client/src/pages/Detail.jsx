import { useParams, Link } from "react-router-dom";
import animales from "../data/animales";

function Detail() {
  const { id } = useParams();
  const animal = animales.find((a) => a.id === Number(id));

  if (!animal) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-8">
        <p className="text-red-600">Animal no encontrado.</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <Link to="/" className="text-emerald-600 hover:underline">← Volver</Link>

      <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm">
        <img
          src={animal.imagen}
          alt={animal.nombre}
          className="h-72 w-full object-cover"
        />
        <div className="p-6">
          <h1 className="text-4xl font-bold">{animal.nombre}</h1>
          <p className="mt-1 text-lg text-slate-500 capitalize">
            {animal.especie} · {animal.edad} años
          </p>
          <p className="mt-4 text-slate-700">{animal.descripcion}</p>
        </div>
      </div>
    </main>
  );
}

export default Detail;