const { Router } = require("express"); //solo de la libreria express necistamos routeer par las rutas
const router = Router();

//const faker = require("faker"); //genera datos falsos para ejemplo
const Paciente = require("../models/Paciente");
const Examen = require("../models/examen");

router.post("/crearPaciente", async (req, res) => {
  //const nuevo = new Paciente(req.body);
  const nuevo = await Paciente.create(req.body);
  res.status(201).send(nuevo);
});

router.post("/crearExamen", async (req, res) => {
  const nuevo = await Examen.create(req.body);
  res.status(201).send(nuevo);
});

router.get("/paciente", async (req, res) => {
  const pacientes = await Paciente.find();
  res.json(pacientes);
});

router.get("/examenes", async (req, res) => {
  const examens = await Examen.find();
  res.json(examens);
});

router.get("/buscarPaciente/:id", async (req, res) => {
  try {
    const pacientes = await Paciente.findById(req.params.id);
    res.json(pacientes);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al encontrar" });
  }
});

router.get("/buscarPacienteEmail/:email", async (req, res) => {
  const email = req.params.email;
  const password = req.query.password;

  try {
    const paciente = await Paciente.findOne({ Email: email });
    if (!paciente) {
      return res.status(404).json({ mensaje: "Email no encontrado" });
    }

    if (paciente.Pass !== password) {
      return res.status(401).json({ mensaje: "Contraseña incorrecta" });
    }

    res.json(paciente);
  } catch (error) {
    res.status(500).json({ mensaje: error });
  }
});

module.exports = router;
