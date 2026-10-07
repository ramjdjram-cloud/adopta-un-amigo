import animales from "../data/animales";
import AnimalCard from "../components/AnimalCard";

function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-3xl font-bold">Encuentra a tu nuevo mejor amigo</h1>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {animales.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </main>
  )
}

export default Home
