const { Router } = require("express"); //solo de la libreria express necistamos routeer par las rutas
const router = Router();

//const faker = require("faker"); //genera datos falsos para ejemplo
const Paciente = require("../models/Paciente");

router.post("/create", async (req, res) => {
  //const nuevo = new Paciente(req.body);
  const nuevo = await Paciente.create(req.body);
  res.status(201).send(nuevo);
});

router.get("/paciente", async (req, res) => {
  const pacientes = await Paciente.find();
  res.json(pacientes);
});

router.get("/buscarPaciente/:id", async (req, res) => {
  const pacientes = await Paciente.findById(req.params.id);
  res.json(pacientes);
});

module.exports = router;
