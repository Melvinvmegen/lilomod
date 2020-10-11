<template lang="pug">
  .d-flex
    v-container#serices
      h1.text-center Je suis les services
      br
      h2.h4.font-italic.text-center Informations de qualité pour votre santé, prévention et bien-être
      br
      h3.text-center Découvrez mes prestations :
      .row.justify-center
        .col-lg-10

</template>

<script>

export default {
  name: 'Services',
  components: {
  },
  computed: {
    prestations () {
      return this.$store.state.prestations.prestations
    }
  },
  created: function() {
    if (this.$store.state.prestations.prestations.length > 0) {
      return
    }
    this.$store.dispatch('getPrestations')
  }
}
</script>

<style>
</style>