<template lang="pug">
  v-app
    v-main
      NavBar(:navItems="navItems", :socialLinks="socialLinks")
      router-view
      Footer(:socialLinks="socialLinks" v-if="!adminCheck")
</template>

<script>
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Logo from './assets/logo.png'

export default {
  name: "App",
  components: {
    NavBar,
    Footer
  },
  metaInfo: {
    title: 'Conseil en image Lilomod',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Découvrez tous mes conseils modes et bien être sur mon blog.' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  data() {
    return {
      navItems: [
        { id: 1, 
          title: "A PROPOS", 
          icon: "mdi-post", 
          link: { name: "About" } 
        },
        {
          id: 2,
          title: "PRESTATIONS",
          icon: "mdi-contacts",
          link: { name: "Services" }
        },
        {
          id: 3,
          title: "ATELIERS",
          icon: "mdi-home-city",
          link: { name: "Workshop" }
        },
        {
          id: 4,
          logo: Logo,
          link: { name: "Homepage" }
        },
        { 
          id: 5, 
          title: "BLOG", 
          icon: "mdi-blogger", 
          link: { name: "Blog" } 
        },
        {
          id: 6,
          title: "CONTACT",
          icon: "mdi-briefcase",
          link: { name: "Contact" }
        }
      ],
      socialLinks: [
        {
          id: 1,
          icon: "mdi-facebook",
          link: "https://www.facebook.com/lilomod-le-blog--114864721893481/"
        },
        {
          id: 2,
          icon: "mdi-pinterest",
          link: "https://www.pinterest.fr/pin/852165560716401451/"
        },
        {
          id: 3,
          icon: "mdi-instagram",
          link: "https://www.instagram.com/lilomod/"
        }
      ]
    };
  },
  computed: {
    adminCheck() {
      return this.$route.path.includes("admin");
    }
  },
  created() {
    this.$store.dispatch("tryAutoLogin");
  }
};
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
  height: -webkit-fill-available;
}

body {
  color: #1d1148;
  min-height: 100vh;
  min-height: -webkit-fill-available;

}

.v-application a {
  text-decoration: none;
}

.container {
  display: flex;
  flex-direction: column;
}

.v-application a {
  color: #6a1b9a !important;
}

.v-application.theme--light.v-list-item {
  color: #6a1b9a !important;
}

.theme--light.v-list-item:hover::before {
  opacity: 0;
}

.theme--light.v-list-item--active::before {
  opacity: 0;
  background-color: none;
}

@media only screen and (max-width: 330px) {
  h1 {
    font-size: 24px;
  }
  h1.text-center[data-v-b36cd462]:after {
    margin: 1rem auto 1rem !important;
  }
}
</style>
