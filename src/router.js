import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/dashboard/Dashboard.vue"),
  },
  {
    path: "/profile",
    component: () => import("@/views/profile/Profile.vue"),
  },
  {
    path: "/settings",
    component: () => import("@/views/settings/Settings.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
