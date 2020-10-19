<template lang="pug">
  .full
    Banner(:blabla='blabla', :image="image" :upside='true' :ctaText="ctaText" :link="link")
    SectionAbout(:upside='true')
</template>

<script>
import SectionAbout from '../components/SectionAbout/SectionAbout'
import Banner from '../components/Banner/Banner'

export default {
  name: 'Homepage',
  components: {
    SectionAbout,
    Banner
  },
  data() {
    return {
      blabla: {
        title: "QUI SE CACHE DERRIERE LILOMOD",
        teaser: "De la colometire au paramètre blabla",
        text: 'Je suis Jennifer, votre conseillère en image sur Aix-en-Provence et ses alentours, formée et diplômée en Conseil en image, Relooking et Personal Shopping chez JBM Consulting (centre de formation certifié). Je suis Jennifer, votre conseillère en image sur Aix-en-Provence et ses alentours, formée et diplômée en Conseil en image, Relooking et Personal Shopping chez JBM Consulting (centre de formation certifié).'
      },
      ctaText: 'Prendre contact',
      link: "/contact",
      image: "https://images.unsplash.com/photo-1560243563-062bfc001d68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    }
  }
}
</script>

<style>
 .full{
   height: 100%;
   width: 100%;
 }
</style>