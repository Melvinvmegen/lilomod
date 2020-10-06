<template lang="pug">
  v-app
    v-main
      NavBar
      .d-flex
        SideBar
        v-container
          router-view
</template>

<script>

import SideBar from './components/SideBar/SideBar'
import NavBar from './components/NavBar/NavBar'

export default {
  name: "App",

  components: {
    SideBar,
    NavBar
  },
  created () {
    this.$store.dispatch('tryAutoLogin')
  }
};
</script>

<style>
  .d-flex {
    height: 100%;
    width: 100%;
  }

  .v-application a {
    text-decoration: none;
  }
</style>