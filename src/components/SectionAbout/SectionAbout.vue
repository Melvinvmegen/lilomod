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
        title: "Le Conseil en Image",
        teaser: "",
        text:
          "Dans une société où l'image a une place essentielle, nous disposons seulement de 4 minutes pour faire une bonne ou une mauvaise impression. <br><br> Mon objectif, en tant que conseillère en image, est de vous aider à vous épanouir, à vous sublimer, à reprendre confiance en vous afin que ces 4 minutes soient toujours en votre faveur. Grâce à mes conseils et aux différentes techniques (colorimétrie, morphologie, découverte de votre style…) vous  vous sentirez toujours à votre avantage. Préparez-vous ainsi à rencontrer la meilleure version de vous-même ! "
      },
      text: ""
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
    min-height: inherit;
    align-items: flex-start;
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
