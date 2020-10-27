import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: () =>
      import(/* webpackChunkName: "homepage" */ "../views/Homepage.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue")
  },
  {
    path: "/services",
    name: "Services",
    component: () =>
      import(/* webpackChunkName: "services" */ "../views/Services.vue")
  },
  {
    path: "/blog",
    name: "Blog",
    component: () =>
      import(/* webpackChunkName: "blog" */ "../views/Blog/Blog.vue"),
    children: [
      {
        path: ":id",
        name: "ArticleShow",
        component: () =>
          import(
            /* webpackChunkName: "articleShow" */ "../views/Blog/ArticleShow.vue"
          )
      }
    ]
  },
  { path: "*", redirect: "/" },
  {
    path: "/login",
    name: "Login",
    beforeEnter: (to, from, next) => {
      if (window.localStorage.token) {
        next("/admin");
      } else {
        next();
      }
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Admin/User/Login.vue")
  },
  // Admin
  {
    path: "/admin",
    name: "Admin",
    beforeEnter: (to, from, next) => {
      if (window.localStorage.token) {
        next();
      } else {
        next("/login");
      }
    },
    component: () =>
      import(/* webpackChunkName: "admin" */ "../views/Admin/Admin.vue"),
    children: [
      {
        path: "articles",
        name: "Articles",
        component: () =>
          import(
            /* webpackChunkName: "articles" */ "../views/Admin/Article/Articles.vue"
          ),
        children: [
          {
            path: "new",
            name: "ArticleNew",
            component: () =>
              import(
                /* webpackChunkName: "articleNew" */ "../views/Admin/Article/ArticleNew.vue"
              )
          },
          {
            path: ":id/edit",
            name: "ArticleEdit",
            component: () =>
              import(
                /* webpackChunkName: "articleEdit" */ "../views/Admin/Article/ArticleEdit.vue"
              )
          }
        ]
      },
      {
        path: "prestations",
        name: "Prestations",
        component: () =>
          import(
            /* webpackChunkName: "prestations" */ "../views/Admin/Prestation/Prestations.vue"
          ),
        children: [
          {
            path: "new",
            name: "PrestationNew",
            component: () =>
              import(
                /* webpackChunkName: "prestationNew" */ "../views/Admin/Prestation/PrestationNew.vue"
              )
          },
          {
            path: ":id/edit",
            name: "PrestationEdit",
            component: () =>
              import(
                /* webpackChunkName: "prestationEdit" */ "../views/Admin/Prestation/PrestationEdit.vue"
              )
          }
        ]
      },
      {
        path: "contacts",
        name: "Contacts",
        component: () =>
          import(
            /* webpackChunkName: "contacts" */ "../views/Admin/Contact/Contacts.vue"
          ),
        children: [
          {
            path: "new",
            name: "ContactNew",
            component: () =>
              import(
                /* webpackChunkName: "prestationNew" */ "../views/Admin/Contact/ContactNew.vue"
              )
          },
          {
            path: ":id/edit",
            name: "ContactEdit",
            component: () =>
              import(
                /* webpackChunkName: "prestationEdit" */ "../views/Admin/Contact/ContactEdit.vue"
              )
          }
        ]
      },
      { path: "*", redirect: "/admin" }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.name === "ArticleShow") {
      return
    }
    return { x: 0, y: 0}
  },
  routes
});

export default router;
