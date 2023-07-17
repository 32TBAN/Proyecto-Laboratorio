<template>
  <div>
    <div class="container p-4">
      <div class="row">
        <div class="col-md-4" v-for="paciente in pacientes" :key="paciente._id">
          <div class="card mb-2">
            <div class="card-body">
              <h5>Cedula: {{ paciente._id }}</h5>
              <p>Nombre: {{ paciente.Nombre }}</p>
              <p>Apellido {{ paciente.Apellido }}</p>
              <p>Genero: {{ paciente.Genero }}</p>
              <p>Fecha de Nacimiento: {{ paciente.FechaNac }}</p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListaPacientes",
  data() {
    return {
      pacientes: [],
      baseURL: "http://localhost:3000",
    };
  },
  created() {
    this.obtenerPacientes();
  },
  methods: {
    obtenerPacientes() {
      fetch(`${this.baseURL}/paciente`)
        .then((res) => res.json())
        .then((data) => (this.pacientes = data));
    },
  },
};
</script>
