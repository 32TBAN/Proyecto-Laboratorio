<template>
  <div>
    <h2>Registro de Laboratorio Clínico</h2>

    <form @submit.prevent="registrar">
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" v-model="nombre" required />

      <label for="edad">Edad:</label>
      <input type="number" id="edad" v-model="edad" required />

      <label for="examen">Examen:</label>
      <select id="examen" v-model="examen" required>
        <option value="">Seleccione un examen</option>
        <option value="Covid">Covid</option>
        <option value="Antígenos">Antígenos</option>
        <option value="Hisopado">Hisopado</option>
        <option value="Examen X">Examen X</option>
        <option value="Examen Y">Examen Y</option>
      </select>

      <label for="resultado">Resultado:</label>
      <input type="text" id="resultado" v-model="resultado" required />

      <button type="submit">Registrar</button>
    </form>

    <div v-if="registros.length > 0">
      <h3>Historial de Registros</h3>
      <ul>
        <li v-for="registro in registros" :key="registro.id">
          <strong>Nombre:</strong> {{ registro.nombre }},
          <strong>Edad:</strong> {{ registro.edad }}, <strong>Examen:</strong>
          {{ registro.examen }}, <strong>Resultado:</strong>
          {{ registro.resultado }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistroLab",
  data() {
    return {
      nombre: "",
      edad: null,
      examen: "",
      resultado: "",
      registros: [],
    };
  },
  methods: {
    registrar() {
      this.registros.push({
        id: Date.now(),
        nombre: this.nombre,
        edad: this.edad,
        examen: this.examen,
        resultado: this.resultado,
      });

      this.nombre = "";
      this.edad = null;
      this.examen = "";
      this.resultado = "";
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
