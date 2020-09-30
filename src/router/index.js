import Vue from "vue";
import VueRouter from "vue-router";
import { store } from "vuex";

Vue.use(VueRouter);

const routes = [
  { path: "/login", name: "Login",
    component: () =>
    import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    beforeEnter (next) {
      if (store.state.token === null) {
        next()
      }
      else {
        next('/dashboard')
      }
    }
  },
  { path: "/", name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue")
  },
  { path: "/about", name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;