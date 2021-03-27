<template lang="pug">
  .section.section-one#section-service
    a.section-anchor(id='Section-Service')
    .section-main
      .section-wrapper(:class="{'flex-column' : upside}")
        TextHeader(:blabla="blabla" :side="true")
      br
    CTA(:className="true", :text="ctaText" color="purple darken-3" link="/services" :centered="true"  v-if="!upside")
</template>

<script>
import TextHeader from "../TextHeader/TextHeader";
import CTA from "../CTA/CTA";
import PrestationCard from "../../components/PrestationCard/PrestationCard";

export default {
  components: {
    TextHeader,
    CTA,
    PrestationCard
  },
  props: {
    upside: Boolean
  },
  data() {
    return {
      blabla: {
        title: "Pour les professionnels : ",
        teaser: "",
        text:
          "Vous êtes une entreprise, une boutique, un centre commercial, une école, une structure sociale, une chaine de télévision… et vous souhaitez obtenir les services d’une conseillère en image ? (Par exemple pour fidéliser et remercier votre fidèle clientèle ou encore pour que l’image de votre entreprise soit davantage plus forte et mieux adaptée à ses valeurs.) <br><br>Je me ferais un plaisir de répondre à votre demande et vous proposerais du sur-mesure en fonction de vos besoins et de vos objectifs. "
      }
    };
  },
  computed: {
    ctaText() {
      return "Demander un devis";
    },
    prestations() {
      if (this.upside) {
        return this.$store.state.prestations.prestations;
      }
      return this.$store.state.prestations.prestations.slice(0, 3);
    }
  },
  created: function() {
    if (this.$store.state.prestations.prestations.length > 0) {
      return;
    }
    this.$store.dispatch("getPrestations");
  }
};
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
  margin-top: 100px;
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
