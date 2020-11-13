<template lang="pug">
  v-card.overflow-hidden.sidebar(height='100%' :class="{'sidebar-sm' : mini }")
    v-navigation-drawer.purple.darken-3(fixed absolute :mini-variant="mini" permanent)
      v-list.py-0(dense='' nav='')
        v-divider
        v-list-item(v-for='item in items' :key='item.title' :to='item.link' two-line exact)
          v-list-item-icon.align-self-center
            v-icon.white--text {{ item.icon }}
          v-list-item-content
            v-list-item-title.white--text {{ item.title }}
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", link: "/admin" },
        { title: "Acceder au site", icon: "mdi-home", link: "/" },
        { title: "Articles", icon: "mdi-post", link: { name: "Articles" } },
        { title: "Contacts", icon: "mdi-contacts", link: { name: "Contacts" } },
        {
          title: "Prestations",
          icon: "mdi-briefcase",
          link: { name: "Prestations" }
        }
      ]
    }
  },
  computed: {
      mini() {
        if (this.$vuetify.breakpoint.smAndDown) {
          console.log('jsuis mini')
          return true
        }
        return false
      }
  }
};
</script>

<style>
.sidebar {
  width: 250px;
  background-color: transparent !important;
  box-shadow: none !important;
}

.sidebar-sm {
  width: 50px !important;
}
</style>
