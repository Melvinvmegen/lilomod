<template lang="pug">
  v-card.footer
    v-footer(dark='' padless='' absolute)
      v-card.purple.darken-3.white--text.flex(flat='' tile='')
        v-card-title.purple.darken-3.white--text
          v-container.d-flex.flex-row(:class="{'flex-column': $vuetify.breakpoint.smAndDown, 'align-center': $vuetify.breakpoint.smAndDown}")
            strong.subheading Retrouvez moi sur les réseaux sociaux !
            v-spacer
            .icons
              v-btn.white--text(v-for='link in socialLinks' :key='link.id' icon='')
                a(:href="link.link")
                  v-icon.white--text(size='24px')
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
};
</script>

<style>
.icons {
  display: flex;
  justify-content: space-around;
  width: 40%;
}

.footer {
  height: 115px !important;
}

@media only screen and (max-width: 960px) {
  .footer {
    height: 179px !important;
  }
}

@media only screen and (max-width: 420px) {
  .footer {
    height: 211px !important;
  }
}
</style>
