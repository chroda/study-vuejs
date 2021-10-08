import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Dashboard from "@/pages/Dashboard.vue";
import Users from "@/pages/Users.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    component: Dashboard
  },
  {
    path: "/users",
    component: Users
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
