<template lang="pug">
  v-app-bar(app='' color='primary' dark='')
    .d-flex.align-center
      v-img.shrink.mr-2(alt='Vuetify Logo' contain='' src='https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png' transition='scale-transition' width='40')
        v-img.shrink.mt-1.hidden-sm-and-down(alt='Vuetify Name' contain='' min-width='100' src='https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png' width='100')
    v-spacer
    v-btn(href='' text='')
      span.mr-2 Se connecter
    v-btn(href='' text='' @click="onLogout")
      span.mr-2 Se deconnecter
</template>

<script>
export default {
  computed: {
    auth () {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>

</style>