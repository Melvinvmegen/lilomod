<template lang="pug">
  .section.section-one#section-card
    a.section-anchor(id='Section-Cards')
    .section-main
      .section-wrapper(:class="{'flex-column' : upside}")
        TextHeader(:blabla="blabla" :side="true")
</template>

<script>
import TextHeader from "../TextHeader/TextHeader";
import CTA from "../CTA/CTA";

export default {
  components: {
    TextHeader,
    CTA
  },
  props: {
    upside: Boolean
  },
  data() {
    return {
      blabla: {
        title: "Carte Cadeau",
        teaser: "",
        text:
          "Vous aimeriez offrir un relooking, une prestation de conseillère en image pour votre mère, votre sœur, une amie ? Je vous propose un carte cadeau qui pourra être utiliser comme bon vous semble : pour une prestation à la carte ou une formule. <strong>Toute formule prise avec une carte cadeau aura une remise de -10%.</strong>",
      }
    };
  }
};
</script>

<style scoped>
.section {
  width: 100%;
  min-height: 55vh;
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
  
}

.section-wrapper-right {
  display: inline-block;
}

@media only screen and (max-width: 400px) {
  .section {
    height: 100% !important;
    min-height: 70vh !important;
  }
}

@media only screen and (max-width: 400px) {
  .section {
    min-height: 80vh !important;
  }
}
</style>
