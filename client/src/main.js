import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";
import Inicio from "./components/Inicio.vue";
import RegistroPacientes from "./components/RegistroPaciente.vue";
import Buscar from "./components/ListaPacientes.vue";
import Laboratorio from "./components/ListaExamenes.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Inicio },
    { path: "/registro-pacientes", component: RegistroPacientes },
    { path: "/buscar", component: Buscar },
    { path: "/laboratorio", component: Laboratorio },
  ],
});

createApp(App).use(router).mount("#app");
