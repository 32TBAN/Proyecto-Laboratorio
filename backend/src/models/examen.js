const { Schema, model } = require("mongoose");

const examen = new Schema({
  CedulaPaciente: String,
  Tipo: String,
  Revisado: Boolean,
  FechaInicio: Date,
  FechaFin: Date,
  NumPosi: Number,
  NumNeg: Number,
  Resul: Number,
  Descripcion: String,
});

module.exports = model("Examen", examen);
