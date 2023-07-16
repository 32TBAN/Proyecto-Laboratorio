import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

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
  linkActiveClass: "nav-item active",
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

app.use(router);

/* eslint-disable no-new */
app.mount("#app");
