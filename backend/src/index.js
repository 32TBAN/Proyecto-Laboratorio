const express = require("express"); //nos ayuda a trabajar con la bse de datos
const app = express(); //iniciar express

const cors = require("cors"); //nos aydua con la rutas de acceso

app.use(cors());
app.use(express.json()); //devuleve una respuesta en formato json
require("./database"); //ver database donde se encuentra todo

app.use("/", require("./routes/index"));

app.listen(3000, () => {
  console.log("Puerto 3000");
});

// node src\index.js