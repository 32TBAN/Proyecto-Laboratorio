import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import routes from "./routes/routes";

// Usar VueRouter
const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "nav-item active",
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

// Crea la instancia de la aplicación
const app = createApp(App);

// Usa VueRouter
app.use(router);

// Monta la aplicación en el elemento con el ID "app"
app.mount("#app");
