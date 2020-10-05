<template lang="pug">
  v-card.overflow-hidden.sidebar(height='100%')
    v-navigation-drawer(fixed :color='color' absolute dark)
      v-list.py-0(dense='' nav='')
        v-divider
        v-list-item(v-for='item in items' :key='item.title' :to='item.link' two-line exact)
          v-list-item-icon.align-self-center
            v-icon {{ item.icon }}
          v-list-item-content
            v-list-item-title {{ item.title }}
</template>

<script>
export default {
 data () {
   return {
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', link: "/admin"},
        { title: 'Acceder au site', icon: 'mdi-home', link: "/" },
        { title: 'Articles', icon: 'mdi-post', link: {name: 'Articles'} },
        { title: 'Contacts', icon: 'mdi-contacts', link: {name: 'Contacts'} },
        { title: 'Prestations', icon: 'mdi-briefcase', link: {name: 'Prestations'} }
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