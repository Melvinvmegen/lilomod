<template lang="pug">
  .section.section-one(id="section-one" :class="{'sm-section' :upside && $vuetify.breakpoint.smAndDown}")
    a.section-anchor
    .section-main
      .section-wrapper(:class="{'flex-column' : upside, 'flex-column': $vuetify.breakpoint.smAndDown}")
        .section-left
          .section-wrapper-image
        .section-right
          TextHeader(:blabla="blabla" :side="true")
            .subtitle-1.text-justify(v-if="upside") {{ text }}
          CTA(:className="true", text="Découvrez en plus" color="purple darken-3" link="/about" v-if="!upside")
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
        title: "Pourquoi le conseil en image ?",
        teaser: "",
        text:
          "Community Manager depuis plus de 7 ans sur Aix-en-Provence, je propose aujourd’hui des formations sur les réseaux sociaux en entreprises, en centre de formation mais aussi à l’Université où je suis prof. Mon constat ? Les entrepreneurs et les étudiants que je forme ne souhaitent pas se montrer sur les écrans par peur de leur image. C’est pourquoi je me suis formée en Conseil en Image pour aller plus loin dans ma prestation et accompagner mes clients à retrouver confiance en eux derrière un objectif, savoir se mettre en valeur et être à l’aise auprès de leur communauté sur les réseaux sociaux."
      },
      text:
        "Community Manager depuis plus de 7 ans sur Aix-en-Provence, je propose aujourd’hui des formations sur les réseaux sociaux en entreprises, en centre de formation mais aussi à l’Université où je suis prof. Mon constat ? Les entrepreneurs et les étudiants que je forme ne souhaitent pas se montrer sur les écrans par peur de leur image. C’est pourquoi je me suis formée en Conseil en Image pour aller plus loin dans ma prestation et accompagner mes clients à retrouver confiance en eux derrière un objectif, savoir se mettre en valeur et être à l’aise auprès de leur communauté sur les réseaux sociaux."
    };
  }
};
</script>

<style scoped>
.section {
  width: 100%;
  display: flex;
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

.flex-column .section-left,
.section-right {
  max-width: 100% !important;
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

@media only screen and (max-width: 600px) {
  .section {
    min-height: 140vh;
    align-items: flex-start;
  }
  .section-wrapper {
    height: 100vh !important;
  }

  .section-left {
    max-height: 20vh !important;
  }

  .section-right {
    max-height: 80vh !important;
  }
}

@media only screen and (max-width: 400px) {
  .sm-section {
    min-height: 1450px;
    align-items: flex-start;
  }
}

@media only screen and (max-width: 330px) {
  .sm-section {
    min-height: 1620px !important;
    align-items: flex-start;
  }

  .section {
    min-height: 120vh;
    align-items: flex-start;
  }
}
</style>
