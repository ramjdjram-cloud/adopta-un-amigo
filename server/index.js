import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const animales = [
  {
    id: 1,
    nombre: "Luna",
    especie: "Perro",
    edad: 2,
    descripcion: "Cachorra juguetona que ama los abrazos.",
    imagen: "https://picsum.photos/seed/1/400/300",
    adoptado: false,
  },
  {
    id: 2,
    nombre: "Calvin",
    especie: "Tortuga",
    edad: 3,
    descripcion: "Tortuga terrestre de los galapagos.",
    imagen: "https://picsum.photos/seed/2/400/300",
    adoptado: false,
  },
  {
    id: 3,
    nombre: "Rex",
    especie: "Gato",
    edad: 5,
    descripcion: "Minino domesticamente salvaje.",
    imagen: "https://picsum.photos/seed/3/400/300",
    adoptado: false,
  },
  {
    id: 4,
    nombre: "Reptil",
    especie: "Iguana",
    edad: 6,
    descripcion: "Iguana marina alegre.",
    imagen: "https://picsum.photos/seed/4/400/300",
    adoptado: false,
  },
];

app.get("/api/animales", (req, res) => {
  res.json(animales);
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
