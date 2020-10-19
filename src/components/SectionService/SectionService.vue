<template lang="pug">
  .section.section-one#section-service
    a.section-anchor(id='Section-Service')
    .section-main
      .section-wrapper(:class="{'flex-column' : upside}")
        TextHeader(:blabla="blabla" :side="true")
      .d-flex.justify-space-around.flex-wrap
        .col-lg-4.col-md-6(v-for="prestation in prestations" :key="prestation.name")
          PrestationCard(:prestation="prestation")
      br
    CTA(:className="true", :text="ctaText" color="purple darken-3" link="/services" :centered="true"  v-if="!upside")
</template> 

<script>
import TextHeader from '../TextHeader/TextHeader'
import CTA from '../CTA/CTA'
import PrestationCard from '../../components/PrestationCard/PrestationCard'

export default {
  components: {
    TextHeader,
    CTA,
    PrestationCard
  },
  props: {
    upside: Boolean
  },
  data () {
    return {
      blabla: {
        title: 'Mes prestations',
        teaser: '',
        text: 'En séance individuelle ou collective je vous apprends à valoriser votre image grâce à de nombreux outils comme la colorimétrie pour apprendre les tonalités de couleurs qui vont avec votre visage et votre carnation ou encore l’analyse de votre style vestimentaire, l’étude de votre morphologie pour apprendre les coupes de vêtements qui mettront en valeur votre corps, et bien plus encore en fonction de votre style personnel et de votre mode de vie.'
      }
    }
  },
  computed: {
    ctaText () {
      if (this.$vuetify.breakpoint.xs) {
        return 'Découvrez mes prestations'
      }
      return 'Découvrez toutes mes prestations'
    },
    prestations () {
      if (this.upside) {
        return this.$store.state.prestations.prestations
      }
      return this.$store.state.prestations.prestations.slice(0, 3)
    }
  },
  created: function() {
    if (this.$store.state.prestations.prestations.length > 0) {
      return
    }
    this.$store.dispatch('getPrestations')
  },
}
</script>

<style scoped>
  .section {
    width: 100%;
    min-height: 90vh;
    position: relative;
    align-items: center;
  }
 
  .section-main {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
  }

  .section-wrapper {
    width: 100%;
    position: relative;
    display: flex;
    margin-top: 100px
  }

  .section-left {
    position: relative;
    margin-right: 5%;
    left: 0;
    max-width: 50%;
    flex: 0 0 50%;
  }

  .section-right {
    flex: 0 0 50%;
    max-width: 50%;
    text-align: center;
  }

  

  .section-wrapper-image {
    position: absolute;
    height: 100%;
    width: 100%;
    background: url(https://images.unsplash.com/photo-1510511336377-1a9caa095849?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80);
    background-size: cover;
    background-position: center;
  }

  .section-wrapper-right {
    display: inline-block;
  }
</style>