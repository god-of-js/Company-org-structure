import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import TransactionList from "@/views/TransactionList.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: TransactionList,
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
