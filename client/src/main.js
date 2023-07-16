import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
<<<<<<< HEAD

// Importa e instala el plugin SidebarPlugin
import SidebarPlugin from "./components/SidebarPlugin/index";
// LightBootstrap plugin
import LightBootstrap from "./light-bootstrap-main";
import routes from "./routes/routes";

import "./registerServiceWorker";

const app = createApp(App);

app.use(SidebarPlugin);
app.use(LightBootstrap);

// configure router
const router = createRouter({
  history: createWebHistory(),
  routes, // short for routes: routes
=======
import routes from "./routes/routes";

// Usar VueRouter
const router = createRouter({
  history: createWebHistory(),
  routes,
>>>>>>> cb6ed0e291bcf828f56f9ff73e4cc113711979ab
  linkActiveClass: "nav-item active",
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

<<<<<<< HEAD
app.use(router);

/* eslint-disable no-new */
=======
// Crea la instancia de la aplicación
const app = createApp(App);

// Usa VueRouter
app.use(router);

// Monta la aplicación en el elemento con el ID "app"
>>>>>>> cb6ed0e291bcf828f56f9ff73e4cc113711979ab
app.mount("#app");
