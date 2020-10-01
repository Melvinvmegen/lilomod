<template lang="pug">
  v-card.overflow-hidden.sidebar(height='100%')
    v-navigation-drawer(fixed :color='color' absolute dark)
      v-list.py-0(dense='' nav='')
        v-divider
        v-list-item(v-for='item in items' :key='item.title' :to='item.link')
          v-list-item-icon
            v-icon {{ item.icon }}
          v-list-item-content
            v-list-item-title {{ item.title }}
</template>

<script>
export default {
 data () {
   return {
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', link: "/dashboard" },
        { title: 'Acceder au site', icon: 'mdi-view-dashboard', link: "/" },
        { title: 'Articles', icon: 'mdi-help-box', link: "/articles" },
        { title: 'Contacts', icon: 'mdi-image', link: "/contacts" },
        { title: 'Prestations', icon: 'mdi-image', link: "/prestations" }
      ],
      color: 'primary',
      colors: [
        'primary',
        'blue',
        'success',
        'red',
        'teal',
      ]
   }
 }
}
</script>

<style>
  .sidebar {
    width: 250px;
    background-color: transparent !important;
    box-shadow: none !important;
  }
</style>