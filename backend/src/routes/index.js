const { Router } = require("express"); //solo de la libreria express necistamos routeer par las rutas
const router = Router();

const faker = require("faker"); //genera datos falsos para ejemplo
const Paciente = require("../models/Paciente");

router.get("/create", async (req, res) => {
  for (let i = 0; i < 5; i++) {
    await Paciente.create({
      Cedula: faker.random.number({ min: 100000000, max: 999999999 }).toString(),
      Nombre: faker.name.findName(),
      Apellido: faker.name.findName(),
      Genero: faker.random.arrayElement(["M", "F"]),
      FechaNac: faker.date.past(),
    });
  }

  res.send("5 datos creados");
});

router.get("/paciente", (req, res) => {});

module.exports = router;
