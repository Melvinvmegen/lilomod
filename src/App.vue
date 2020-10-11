<template lang="pug">
  v-app
    v-main
      NavBar(:navItems="navItems")
      router-view
      Footer(:socialLinks="socialLinks" v-if="!adminCheck")
</template>

<script>
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

export default {
  name: "App",
  components: {
    NavBar,
    Footer
  },
  data () {
    return {
      navItems: [
        { id: 1, name: 'A propos', href: '/about' },
        { id: 2, name: 'Mes services', href: '/services' },
        { id: 3, name: 'Espace Blog', href: '/blog' },
        { id: 4, name: 'Prendre Contact', href: '/contact' }
      ],
      socialLinks: [
        { id: 1, icon: 'mdi-facebook', link: '' },
        { id: 2, icon: 'mdi-twitter', link: '' },
        { id: 3, icon: 'mdi-instagram', link: '' },
        { id: 4, icon: 'mdi-linkedin', link: '' }
      ]
    }
  },
  computed: {
    adminCheck() {
      return this.$route.path.includes("admin")
    }
  },
  created () {
    this.$store.dispatch('tryAutoLogin')
  }
};
</script>

<style>
  .v-application a {
    text-decoration: none;
  }
</style>