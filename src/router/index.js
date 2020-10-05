import Vue from "vue";
import VueRouter from "vue-router";
// import store from '../store/index'

Vue.use(VueRouter);

const routes = [
  { path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  // Admin
  { path: "/admin", 
    name: "Admin",
    component: () => import(/* webpackChunkName: "admin" */ "../views/Admin/Admin.vue"),
    children: [
      { path: "articles", 
        name: "Articles",
        component: () => import(/* webpackChunkName: "articles" */ "../views/Admin/Article/Articles.vue"),
        children: [
          { path: 'new',
          name: "ArticleNew",  
            component: () => import(/* webpackChunkName: "articleNew" */ "../views/Admin/Article/ArticleNew.vue") 
          },
          { path: ':id/edit',
            name: "ArticleEdit", 
            component: () => import(/* webpackChunkName: "articleEdit" */ "../views/Admin/Article/ArticleEdit.vue") 
          }
        ]
      },
      { path: "prestations", 
        name: "Prestations",
        component: () => import(/* webpackChunkName: "prestations" */ "../views/Admin/Prestation/Prestations.vue"),
        children: [
          { path: 'new',
          name: "PrestationNew",  
            component: () => import(/* webpackChunkName: "prestationNew" */ "../views/Admin/Prestation/PrestationNew.vue") 
          },
          { path: ':id/edit',
            name: "PrestationEdit", 
            component: () => import(/* webpackChunkName: "prestationEdit" */ "../views/Admin/Prestation/PrestationEdit.vue") 
          }
        ]
      },
      { path: "contacts", 
        name: "Contacts",
        component: () => import(/* webpackChunkName: "contacts" */ "../views/Admin/Contact/Contacts.vue"),
        children: [
          { path: 'new',
          name: "ContactNew",  
            component: () => import(/* webpackChunkName: "prestationNew" */ "../views/Admin/Contact/ContactNew.vue") 
          },
          { path: ':id/edit',
            name: "ContactEdit", 
            component: () => import(/* webpackChunkName: "prestationEdit" */ "../views/Admin/Contact/ContactEdit.vue") 
          }
        ]
      },
      { path: '*', redirect: '/admin' }
    ]
  },
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