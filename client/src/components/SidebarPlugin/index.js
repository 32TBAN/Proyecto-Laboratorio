// index.js
import Sidebar from "./SideBar.vue";
import SidebarLink from "./SidebarLink.vue";

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: "Dashboard",
      icon: "ti-panel",
      path: "/admin/overview",
    },
  ],
  displaySidebar(value) {
    this.showSidebar = value;
  },
};

const SidebarPlugin = {
  install(app) {
    app.mixin({
      created() {
        this.sidebarStore = SidebarStore;
      },
    });

    // No es necesario acceder a $root, solo usa this.sidebarStore directamente

    app.component("side-bar", Sidebar);
    app.component("sidebar-link", SidebarLink);
  },
};

export default SidebarPlugin;
