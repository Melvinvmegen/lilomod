<template lang="pug">
  div 
    Banner(:blabla='blabla', :image="image" :ctaText="ctaText")
    SectionService(:upside='true')
    SectionContact
    SectionTarifs
</template>

<script>
import Banner from '../components/Banner/Banner'
import SectionService from '../components/SectionService/SectionService'
import SectionTarifs from '../components/SectionTarifs/SectionTarifs'
import SectionContact from '../components/SectionContact/SectionContact'

export default {
  name: 'Services',
  components: {
    SectionService,
    SectionTarifs,
    SectionContact,
    Banner
  },
  data () {
    return {
      blabla: {
        title: 'PRESTATIONS',
        teaser: 'Informations de qualité pour votre santé, prévention et bien-être',
        text: 'En séance individuelle ou collective je vous apprends à valoriser votre image grâce à de nombreux outils comme la colorimétrie pour apprendre les tonalités de couleurs qui vont avec votre visage et votre carnation ou encore l’analyse de votre style vestimentaire, l’étude de votre morphologie pour apprendre les coupes de vêtements qui mettront en valeur votre corps, et bien plus encore en fonction de votre style personnel et de votre mode de vie.'
      },
      ctaText: 'Découvrez mes prestations',
      link: '/contact',
      image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80 '
    }
  }
}
</script>

<style>
</style>