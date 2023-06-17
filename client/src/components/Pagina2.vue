<template>
  <div>
    <h2>Registro de Medico</h2>
    
    <form @submit.prevent="registrarMedico">
      <label for="cedula">Cédula:</label>
      <input type="text" id="cedula" v-model="nombre" required />

      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" v-model="nombre" required />

      <label for="apellido">Apellido:</label>
      <input type="text" id="apellido" v-model="nombre" required />

      <label for="examen">Tipo de Exámen:</label>
      <select id="examen" v-model="examen" required>
        <option value="">Seleccione un examen</option>
        <option value="Covid">Covid</option>
        <option value="Antígenos">Antígenos</option>
        <option value="Hisopado">Hisopado</option>
        <option value="Examen X">Examen X</option>
        <option value="Examen Y">Examen Y</option>
      </select>

      <label for="cliente">Cliente:</label>
      <input type="text" id="cliente" v-model="nombre" required />

      <button type="submit">Registrar</button>
    </form>

    <div v-if="registros.length > 0">
      <h3>Registro de exámen médico</h3>
      <ul>
        <li v-for="registro in registros" :key="registro.id">
          <strong>Cédula:</strong> {{ registro.cedula }},
          <strong>Nombre:</strong> {{ registro.nombre }},
          <strong>Apellido:</strong> {{ registro.apellido }},
          <strong>Tipo de Exámen:</strong> {{ registro.examen }}
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
    registrarMedico() {
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
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 8px;
}
</style>
