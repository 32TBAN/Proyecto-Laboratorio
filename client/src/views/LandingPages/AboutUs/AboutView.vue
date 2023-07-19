<script setup>
import { onMounted, ref } from "vue";

//example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";

//image

//material components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// material-input
const tipo = JSON.parse(sessionStorage.getItem("datosInicio")).Tipo;

const examenes = ref([]);

onMounted(() => {
  fetch("http://localhost:3001/examenes")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].Tipo == "Covid" && data[i].Revisado == false) {
          examenes.value.push(data[i]);
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });
});
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <DefaultNavbar
          :sticky="true"
          :action="{
            route: 'http://localhost:3000/',
            color: 'bg-gradient-success',
            label: tipo,
          }"
        />
      </div>
    </div>
  </div>
  <section>
    <div class="page-header min-vh-100">
      <div class="container">
        <div class="row">
          <div
            class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column"
          >
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Tipo</th>
                    <th>Fecha Envio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="examen in examenes"
                    :key="examen._id"
                    @click="selectExamen(examen._id)"
                    :class="{ 'table-primary': selectedExamen === examen._id }"
                  >
                    <td>{{ examen._id }}</td>
                    <td>{{ examen.Tipo }}</td>
                    <td>{{ examen.FechaInicio }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- <div
              class="position-relative h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center"
              :style="{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
              }"
              loading="lazy"
            ></div> -->
          </div>
          <div
            class="mt-8 col-xl-5 col-lg-6 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5"
          >
            <div
              class="card d-flex blur justify-content-center shadow-lg my-sm-0 my-sm-6 mt-8 mb-5"
            >
              <div
                class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent"
              >
                <div
                  class="bg-gradient-success shadow-success border-radius-lg p-3"
                >
                  <h3 class="text-white text-success mb-0">Covid-Hisopados</h3>
                </div>
              </div>
              <div class="card-body">
                <p class="pb-3">Registro del exámen de Covid-Hisopados</p>
                <p class="text-black mb-0">{{ selectedExamen }}</p>
                <form id="contact-form" method="post" autocomplete="off">
                  <div class="card-body p-0 my-3">
                    <div class="row">
                      <div class="col-md-6 ps-md-2">
                        <MaterialInput
                          class="input-group-static mb-4"
                          type="number"
                          label="Número Positivo"
                          placeholder="Número Positivo"
                          v-model="numeroPositivo"
                        />
                      </div>
                      <div class="col-md-6 ps-md-2">
                        <MaterialInput
                          class="input-group-static mb-4"
                          type="number"
                          label="Número Negativo"
                          placeholder="Número Negativo"
                          v-model="numeroNegativo"
                        />
                      </div>
                      <div class="col-md-6 ps-md-2">
                        <MaterialInput
                          class="input-group-static mb-4"
                          type="number"
                          label="Resultado Total"
                          placeholder="Resultado Total"
                          v-model="resultadoTotal"
                        />
                      </div>
                    </div>
                    <div class="form-group mb-0 mt-md-0 mt-4">
                      <MaterialTextArea
                        id="message"
                        class="input-group-static mb-4"
                        :rows="8"
                        placeholder="Descripción del exámen"
                        v-model="descripcion"
                        >Descripción del exámen</MaterialTextArea
                      >
                    </div>
                    <div class="row">
                      <div class="col-md-12 text-center">
                        <MaterialButton
                          variant="gradient"
                          color="success"
                          class="mt-3 mb-0"
                          @click="actualizarExamen"
                          >Guardar Resultados</MaterialButton
                        >
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <DefaultFooter />
</template>
<script>
export default {
  data() {
    return {
      examenes: [],
      selectedExamen: "", // Variable reactiva para almacenar el ID del examen seleccionado
    };
  },
  methods: {
    selectExamen(examenId) {
      this.selectedExamen = examenId;
    },
    async actualizarExamen(e) {
      e.preventDefault();
      const examenId = this.selectedExamen; // Obtén el ID del examen seleccionado
      const numeroPositivo = this.numeroPositivo; // Obtén el número positivo ingresado
      const numeroNegativo = this.numeroNegativo; // Obtén el número negativo ingresado
      const resultadoTotal = this.resultadoTotal; // Obtén el resultado total ingresado
      const descripcion = this.descripcion; // Obtén la descripción ingresada

      var today = new Date();
      const actualizacion = {
        NumeroPositivo: numeroPositivo,
        NumeroNegativo: numeroNegativo,
        ResultadoTotal: resultadoTotal,
        Descripcion: descripcion,
        FechaFin: today.toLocaleString(),
        Revisado: true,
      };

      try {
        const response = await fetch(
          `http://localhost:3001/actualizarExamen/${examenId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(actualizacion),
          }
        );

        if (response.ok) {
          // Actualización exitosa
          // Puedes realizar cualquier acción adicional después de actualizar el examen
          console.log("Examen actualizado correctamente");
        } else {
          // Error al actualizar el examen
          console.error("Error al actualizar el examen");
        }
      } catch (error) {
        console.error(error);
      }
    },
    // Resto de los métodos
  },
  // Resto del código
};
</script>
