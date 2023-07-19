<template>
  <div>
    <form @submit.prevent="registrar" class="row g-3">
      <div class="col-md-6">
        <label for="cedula" class="form-label">Cedula:</label>
        <input
          type="text"
          id="cedula"
          v-model="cedula"
          maxlength="10"
          required
          class="form-control"
          placeholder="Ingrese una cedula"
          @input="existe"
        />
      </div>
      <div class="col-md-6">
        <label for="nombre" class="form-label">Nombre:</label>
        <input
          type="text"
          id="nombre"
          v-model="nombre"
          class="form-control"
          placeholder="Ingrese un nombre"
          required
        />
      </div>
      <div class="col-md-6">
        <label for="apellido" class="form-label">Apellido:</label>
        <input
          type="text"
          id="apellido"
          v-model="apellido"
          class="form-control"
          placeholder="Ingrese un apellido"
          required
        />
      </div>
      <div class="col-md-6">
        <label for="genero" class="form-label">Genero:</label>
        <select id="genero" v-model="genero" class="form-select" required>
          <option value="">Seleccione un genero</option>
          <option value="M">Masculino</option>
          <option value="F">Femenino</option>
        </select>
      </div>
      <div class="col-md-6">
        <label for="edad" class="form-label">Fecha de nacimiento:</label>
        <input
          type="date"
          id="edad"
          v-model="edad"
          class="form-control"
          required
        />
      </div>
      <div class="col-md-6">
        <label for="examen" class="form-label">Examen:</label>
        <select id="examen" v-model="examen" class="form-select" required>
          <option value="">Seleccione un examen</option>
          <option value="Covid">Covid</option>
          <option value="Antígenos">Antígenos</option>
          <option value="Hisopado">Hisopado</option>
          <option value="Examen X">Otro</option>
        </select>
      </div>
      <div class="col-md-12 text-center">
        <button type="submit" class="btn btn-primary">Registrar</button>
      </div>
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
      examen: "",
      baseURL: "http://localhost:3001",
      siExiste: false,
    };
  },
  methods: {
    registrar() {
      const paciente = {
        _id: this.cedula,
        Nombre: this.nombre,
        Apellido: this.apellido,
        Genero: this.genero,
        FechaNac: this.edad,
        Email: JSON.parse(sessionStorage.getItem("datosInicio")).Email,
        Pass: JSON.parse(sessionStorage.getItem("datosInicio")).Pass,
      };

      var hoy = new Date();
      const examen = {
        CedulaPaciente: this.cedula,
        Revisado: false,
        FechaInicio: hoy,
        Tipo: this.examen,
      };

      if (!this.siExiste) {
        fetch(`${this.baseURL}/crearPaciente`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(paciente),
        })
          .then((res) => res.json())
          .then((nuevoPaciente) => {
            console.log("Nuevo paciente creado:", nuevoPaciente);
          })
          .catch((error) => {
            console.error("Error al crear el paciente:", error);
          });
      }

      fetch(`${this.baseURL}/crearExamen`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(examen),
      })
        .then((res) => res.json())
        .then((nuevoExamen) => {
          // Aquí puedes realizar alguna acción con la respuesta del backend
          console.log("Nuevo examen creado:", nuevoExamen);
        })
        .catch((error) => {
          console.error("Error al crear el examen:", error);
        });

      this.cedula = "";
      this.apellido = "";
      this.genero = "";
      this.edad = "";
      this.examen = "";
      this.nombre = "";
    },
    existe() {
      if (this.cedula != "") {
        if (this.siExiste) {
          this.nombre = "";
          this.apellido = "";
          this.genero = " ";
          this.edad = "";
          this.examen = " ";
          this.siExiste = false;
        }

        fetch(`${this.baseURL}/buscarPaciente/${this.cedula}`)
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error("Error en la respuesta del servidor");
            }
          })
          .then((pacienteX) => {
            if (pacienteX != null) {
              this.nombre = pacienteX.Nombre;
              this.apellido = pacienteX.Apellido;
              this.genero = pacienteX.Genero;
              this.edad = new Date(pacienteX.FechaNac)
                .toISOString()
                .substr(0, 10);
              this.siExiste = true;
            }
          })
          .catch((error) => {
            console.error("Error al encontrar el paciente:", error);
          });
      }
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
