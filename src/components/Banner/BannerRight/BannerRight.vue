<template lang="pug">
  .header-right(:style="{ backgroundImage: 'url(' + image + ')' }" v-if="!contact")
  .header-right(v-else)
    ContactForm
</template>

<script>
import ContactForm from '../../ContactForm/ContactForm'

export default {
  props: {
    image: String,
    contact: Boolean
  },
  components:{
    ContactForm
  }
}
</script>

<style>
  .header-right {
    width: 80%;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    position: relative;
  }
  .sm {
    padding: 50px 0 !important;
  }
</style>
