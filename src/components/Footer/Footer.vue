<template lang="pug">
  v-card.flex(height="150")
    v-footer(dark='' padless='' absolute)
      v-card.indigo.lighten-1.white--text.flex(flat='' tile='')
        v-card-title.indigo.lighten-1.white--text
          v-container.d-flex
            strong.subheading Vous pouvez également me contacter sur les réseaux sociaux !
            v-spacer
            v-btn.mx-4.white--text(v-for='link in socialLinks' :key='link.id' icon='' :to='link.link')
              v-icon(size='24px')
                | {{ link.icon }}
        v-divider
        v-card-text.white--text.text-center
          | {{ new Date().getFullYear() }} &mdash; 
          strong Melvinvmegen
</template>

<script>
export default {
  props: {
    socialLinks: Array
  }
}
</script>

<style>

</style>