import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import routes from "./routes/routes";
import SidebarPlugin from "./components/SidebarPlugin/index";
import StatsCard from "./components/Cards/StatsCard.vue";
import ChartCard from "./components/Cards/ChartCard.vue";
import LTable from "./components/Table.vue";

const app = createApp(App);
app.use(SidebarPlugin);

// Usa VueRouter
app.component("LTable", LTable);
app.component("StatsCard", StatsCard);
app.component("ChartCard", ChartCard);

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
app.use(router);

app.mount("#app");
