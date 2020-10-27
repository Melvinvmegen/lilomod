<template lang="pug">
  v-card.flex(:height="footerHeight")
    v-footer(dark='' padless='' absolute)
      v-card.indigo.lighten-1.white--text.flex(flat='' tile='')
        v-card-title.indigo.lighten-1.white--text
          v-container.d-flex.flex-row(:class="{'flex-column': $vuetify.breakpoint.smAndDown, 'align-center': $vuetify.breakpoint.smAndDown}")
            strong.subheading Retrouvez moi sur les réseaux sociaux !
            v-spacer
            .icons
              v-btn.white--text(v-for='link in socialLinks' :key='link.id' icon='')
                a(:href="link.link")
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
  },
  computed: {
    footerHeight() {
      if (this.$vuetify.breakpoint.smAndDown) {
        return 180
      }
      return 150
    }
  }
};
</script>

<style>
.icons {
  display: flex;
  justify-content: space-around;
  width: 40%;
}
</style>
