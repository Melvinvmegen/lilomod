<template lang="pug">
  .d-flex
    v-container#contact
      h1.text-center Formulaire de contact
      br
      h3.text-center Je m'engage à vous repondre sous 24h
      ContactForm
</template>

<script>
import ContactForm from '../components/ContactForm/ContactForm'

export default {
  name: 'Contact',
  components: {
    ContactForm
  }
}
</script>

<style>

</style>