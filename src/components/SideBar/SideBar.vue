<template lang="pug">
  v-card.overflow-hidden.sidebar(height='100%')
    v-navigation-drawer(v-model='drawer' fixed :color='color' :mini-variant='miniVariant' :right='right' :src='bg' absolute dark)
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
        { title: 'Accueil', icon: 'mdi-view-dashboard', link: "accueil" },
        { title: 'Photos', icon: 'mdi-image', link: "photos" },
        { title: 'About', icon: 'mdi-help-box', link: "" },
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