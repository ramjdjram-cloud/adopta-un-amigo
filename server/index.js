import express  from "express";

const app = express();

app.get("/api/animales", (req, res) => {
  res.json([
    { nombre: "Luna", especie: "Perro", edad: 2 },
    { nombre: "Rex", especie: "Gato", edad: 5 },
    { nombre: "Reptil", especie: "Iguana", edad: 6 },
  ]);
});

app.listen((3000), () => {
  console.log("Server corriendo en puerto 3000");
})
