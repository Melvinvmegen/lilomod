<template lang="pug">
  .section.section-one#section-tarif
    a.section-anchor(id='Section-Tarifs')
    .section-main
      .section-wrapper(:class="{'flex-column' : upside}")
        TextHeader(:blabla="blabla" :side="true")
      v-simple-table(v-if="prestations.length > 0")
        template(v-slot:default='')
          thead
            tr
              th.text-left
                | Prestation
              th.text-left
                | Tarif
          tbody
            tr(v-for="prestation in prestations" :key="prestation.id")
              td {{ prestation.name }}
              td {{ prestation.price + '€' }}
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
        title: "À distance",
        teaser: "",
        text:
          "Je vous propose également de vous accompagner à distance, via zoom ou FaceTime"
      },
      prestations: [
        {
          id: 1,
          name: "Colorimétrie",
          price: 79
        },
        {
          id: 2,
          name: "Morphologie + Style",
          price: 179
        },
        {
          id: 3,
          name: "Morphologie Visage + coiffure",
          price: 79
        },
        {
          id: 4,
          name: "Cosmétologie",
          price: 129
        },
        {
          id: 5,
          name: "Accompagnement Shopping (2 heures)",
          price: 99
        }
      ]
    };
  }
};
</script>

<style scoped>
.section {
  width: 100%;
  min-height: 70vh;
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
    min-height: 100vh !important;
  }
}

@media only screen and (max-width: 400px) {
  .section {
    min-height: 110vh !important;
  }
}
</style>
