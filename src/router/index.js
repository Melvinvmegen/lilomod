import Vue from "vue";
import VueRouter from "vue-router";
// import store from '../store/index'

Vue.use(VueRouter);

const routes = [
  { path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  { path: "/dashboard", 
    name: "Dashboard",
    component: () => import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue")
  },
  { path: "/articles", 
    name: "Articles",
    component: () => import(/* webpackChunkName: "articles" */ "../views/Articles.vue"),
    children: [
      { path: 'new', 
        component: () => import(/* webpackChunkName: "articleNew" */ "../views/ArticleNew.vue") 
      },
      { path: ':id/edit', 
        component: () => import(/* webpackChunkName: "articleEdit" */ "../views/ArticleEdit.vue") 
      },
      { path: 'delete', 
        component: () => import(/* webpackChunkName: "articleDelete" */ "../views/ArticleDelete.vue") 
      }
    ]
  },
  { path: '*', redirect: '/dashboard' }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// router.beforeEach((to, from, next) => {
//   console.log(store.state.token)
//   if (to.name !== 'Login' && store.state.token === null) {
//     console.log('jsuis dans le if')
//     next('/login')
//   }
//   else {
//     console.log('jsuis dans le else')
//     next()
//   }
// });

export default router;