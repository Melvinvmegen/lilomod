<template lang="pug">
  v-card.footer
    v-footer(dark='' padless='' absolute)
      v-card.purple.darken-3.white--text.flex(flat='' tile='')
        v-card-title.purple.darken-3.white--text
          v-container.d-flex.flex-row.pa-0(:class="{'flex-column': $vuetify.breakpoint.smAndDown, 'align-center': $vuetify.breakpoint.smAndDown}")
            Logo(color="defaultlogo" :bottom="true")
            v-spacer.d-flex.justify-center.align-center
              strong.subheading Retrouvez moi sur les réseaux sociaux :
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
import Logo from '../Logo/Logo'

export default {
  props: {
    socialLinks: Array
  },
  components: {
    Logo
  }
};
</script>

<style>
.icons {
  display: flex;
  justify-content: space-around;
  width: 40%;
  align-items: center;
}

.footer {
  height: 147px !important;
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
