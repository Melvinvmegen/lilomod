import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store/index'

Vue.use(VueRouter);

const routes = [
  { path: "/login", name: "Login",
    component: () =>
    import(/* webpackChunkName: "login" */ "../views/Login.vue"),
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

router.beforeEach((to, from, next) => {
  console.log(from)
  if (to.name !== 'Login' && store.state.token !== null) {
    console.log('jsuis dans le if')
    next('/login')
  }
  else {
    console.log('jsuis dans le else')
    next()
  }
});

export default router;