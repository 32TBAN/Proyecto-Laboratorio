<template>
  <div>
    <h2>Registro de Laboratorio Clínico</h2>

    <form @submit.prevent="registrar">
      <label for="cedula">Cedula:</label>
      <input type="text" id="cedula" v-model="cedula" maxlength="10" required />

      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" v-model="nombre" required />

      <label for="apellido">Apellido:</label>
      <input type="text" id="apellido" v-model="apellido" required />

      <label for="genero">Genero:</label>
      <select id="genero" v-model="genero" required>
        <option value="">Seleccione un genero</option>
        <option value="M">Masculino</option>
        <option value="F">Femenino</option>
      </select>

      <label for="edad">Fecha de nacimiento:</label>
      <input type="date" id="edad" v-model="edad" required />

      <label for="examen">Examen:</label>
      <select id="examen" v-model="examen" required>
        <option value="">Seleccione un examen</option>
        <option value="Covid">Covid</option>
        <option value="Antígenos">Antígenos</option>
        <option value="Hisopado">Hisopado</option>
        <option value="Examen X">Examen X</option>
        <option value="Examen Y">Examen Y</option>
      </select>

      <br />
      <button type="submit">Registrar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegistroLab",
  data() {
    return {
      cedula: "",
      nombre: "",
      apellido: "",
      genero: "",
      edad: "",
    };
  },
  methods: {
    registrar() {
      const paciente = {
        Cedula: this.cedula,
        Nombre: this.nombre,
        Apellido: this.apellido,
        Genero: this.genero,
        FechaNac: this.edad,
      };

      fetch("http://localhost:3000/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paciente),
      })
        .then((res) => res.json())
        .then((nuevoPaciente) => {
          // Aquí puedes realizar alguna acción con la respuesta del backend
          console.log("Nuevo paciente creado:", nuevoPaciente);
        })
        .catch((error) => {
          console.error("Error al crear el paciente:", error);
        });

      this.cedula = "";
      this.apellido = "";
      this.genero = "";
      this.edad = "";
      this.edad = null;
      this.examen = "";
    },
  },
};
</script>

<style scoped>
h2 {
  font-size: 24px;
  margin-bottom: 16px;
}
label {
  display: block;
  margin-bottom: 8px;
}
input,
select {
  margin-bottom: 16px;
}
button {
  background-color: #3490dc;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 8px;
}
</style>
