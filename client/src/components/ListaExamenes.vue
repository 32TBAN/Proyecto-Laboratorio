<template>
  <div class="container mt-4">
    <h1>Lista de exámenes</h1>

    <div class="form-group mt-4">
      <label for="fechaFiltro">Filtrar por fecha:</label>
      <input
        type="date"
        class="form-control"
        id="fechaFiltro"
        v-model="fechaFiltro"
        @input="filtrarExamenes"
      />
    </div>

    <table class="table mt-4">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="examen in examenes" :key="examen._id">
          <td>{{ examen.Tipo }}</td>
          <td>{{ examen.FechaInicio }}</td>
          <td><input type="checkbox" v-model="examen.Revisado" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      examenes: [],
      fechaFiltro: "",
    };
  },
  created() {
    this.obtenerExamenes();
  },
  methods: {
    obtenerExamenes() {
      fetch(`${this.baseURL}/examenes`)
        .then((res) => res.json())
        .then((data) => (this.examenes = data));
    },
  },
};
</script>
