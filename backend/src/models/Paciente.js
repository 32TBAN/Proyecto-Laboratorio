const { Schema, model } = require("mongoose");

const paciente = new Schema({
  _id: String,
  Nombre: String,
  Apellido: String,
  Genero: String,
  FechaNac: Date,
  Email: String,
  Pass: String,
});

module.exports = model("Paciente", paciente);
