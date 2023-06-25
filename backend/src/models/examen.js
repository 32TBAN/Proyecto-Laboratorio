const { Schema, model } = require("mongoose");

const examen = new Schema({
  CedulaPaciente: String,
  Revisado: Boolean,
  FechaInicio: Date,
  FechaFin: Date,
});

module.exports = model("Examen", examen);
