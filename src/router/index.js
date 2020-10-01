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
      name: "ArticleNew",  
        component: () => import(/* webpackChunkName: "articleNew" */ "../views/ArticleNew.vue") 
      },
      { path: ':id/edit',
        name: "ArticleEdit", 
        component: () => import(/* webpackChunkName: "articleEdit" */ "../views/ArticleEdit.vue") 
      }
    ]
  },
  { path: "/prestations", 
    name: "Prestations",
    component: () => import(/* webpackChunkName: "prestations" */ "../views/Prestations.vue"),
    children: [
      { path: 'new',
      name: "PrestationNew",  
        component: () => import(/* webpackChunkName: "prestationNew" */ "../views/PrestationNew.vue") 
      },
      { path: ':id/edit',
        name: "PrestationEdit", 
        component: () => import(/* webpackChunkName: "prestationEdit" */ "../views/PrestationEdit.vue") 
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