<template lang="pug">
  v-app-bar.indigo.lighten-1.white--text(app='' fixed elevate-on-scroll)
    .d-flex.align-center.main-header-left
      router-link(:to="navItems ? {name: 'Homepage'} : {name: 'Admin'}")
        v-img.shrink.mr-2(alt='Vuetify Logo' to="admin" contain='' src='https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png' transition='scale-transition' width='40')
          v-img.shrink.mt-1.hidden-sm-and-down(alt='Vuetify Name' contain='' min-width='100' src='https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png' width='100')
    .main-header-center(v-if="!$route.path.includes('admin')") 
      .nav-item(v-for="item in navItems" :key="item.name")
        router-link(:to="item.href") {{ item.name }}

    v-btn(href='' text='' v-if="!auth" to="/login" dark)
      span.mr-2 Se connecter
    v-btn(href='' text='' v-if="auth" @click="onLogout" dark)
      span.mr-2 Se deconnecter
</template>

<script>
export default {
  props: {
    navItems: Array
  },
  computed: {
    auth () {
      return this.$store.getters.isAuthenticated
    }
  },
  created: function(){
    console.log()
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>
  .v-toolbar__content {
    justify-content: space-between;
  }

  .nav-item a {
    color: white !important;
  }

  .main-header-left {
    width: 10%;
    margin-left: 10px;
    margin-top: 5px;
    max-height: 100%;
  }

  .main-header-center {
    display: flex;
    align-items: center;
    height: 100%;
    text-align: center;
    width: 40%;
  }

  .main-header-center .nav-item {
    text-align: left;
    padding: 0 20px;
    font-size: 18px;
    font-weight: 700;
    width: 100%;
  }
</style>