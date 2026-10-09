import { useParams, Link } from "react-router-dom";


function Detail({animales,adoptar}) {
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

      {animal.adoptado ? (
        <span className="mt-6 inline-block rounded-full bg-emerald-100 px-4 py-2 font-semibold text-emerald-700">
          ✅ Adoptado
        </span>
      ) : (
        <button
          onClick={() => adoptar(animal.id)}
          className="mt-6 rounded-lg bg-emerald-600 px-6 py-2 font-semibold text-white hover:bg-emerald-700"
        >
          Adoptar
        </button>
      )}
    </main>
  );
}

export default Detail;