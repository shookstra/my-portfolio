import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

// 404 error on page refresh fix found here (public/_redirects file):
// https://www.youtube.com/watch?v=C3FQoj7cw4s

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "Sam Hookstra - Portfolio" },
  },
  {
    path: "/experience",
    name: "Experience",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Experience.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("../views/Projects.vue"),
    meta: { title: "Sam Hookstra - Portfolio" },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
    meta: { title: "Sam Hookstra - Portfolio" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
