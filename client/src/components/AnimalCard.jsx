import {Link} from 'react-router-dom';

function AnimalCard({ animal }) {
  return (
    <Link to={`/animal/${animal.id}`}className='block'>
    <div className="overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md">
      <img
        src={animal.imagen}
        alt={animal.nombre}
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <p className="text-lg font-bold">{animal.nombre}</p>
        <p className="text-sm text-slate-500 capitalize">{animal.especie} · {animal.edad} años</p>
      </div>
    </div>
    </Link>
  );
}

export default AnimalCard;