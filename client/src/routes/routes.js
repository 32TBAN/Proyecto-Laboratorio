<<<<<<< HEAD
import DashboardLayout from "../layout/DashboardLayout.vue";
// GeneralViews
import NotFound from "../pages/NotFoundPage.vue";

// Admin pages
import Overview from "../pages/OverviewPage.vue";
import UserProfile from "../pages/UserProfile.vue";
import TableList from "../pages/TableList.vue";
import Typography from "../pages/TypographyPage.vue";
import Icons from "../pages/IconsPage.vue";
import Maps from "../pages/MapsPage.vue";
import Notifications from "../pages/NotificationsPage.vue";
import Upgrade from "../pages/UpgradePage.vue";
=======
import Inicio from "../components/Inicio.vue";
>>>>>>> cb6ed0e291bcf828f56f9ff73e4cc113711979ab

const routes = [
  {
    path: "/",
<<<<<<< HEAD
    component: DashboardLayout,
    redirect: "/admin/overview",
  },
  {
    path: "/admin",
    component: DashboardLayout,
    redirect: "/admin/overview",
    children: [
      {
        path: "overview",
        name: "Overview",
        component: Overview,
      },
      {
        path: "user",
        name: "User",
        component: UserProfile,
      },
      {
        path: "table-list",
        name: "Table List",
        component: TableList,
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography,
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons,
      },
      {
        path: "maps",
        name: "Maps",
        component: Maps,
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications,
      },
      {
        path: "upgrade",
        name: "Upgrade to PRO",
        component: Upgrade,
      },
    ],
  },
  { path: "/:catchAll(.*)", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

=======
    component: Inicio,
    redirect: "/incio",
  },
];

>>>>>>> cb6ed0e291bcf828f56f9ff73e4cc113711979ab
export default routes;
