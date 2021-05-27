<template lang="pug">
  .section.section-one#section-tarif
    a.section-anchor(id='Section-Tarifs')
    .section-main
      .section-wrapper(:class="{'flex-column' : upside}")
        TextHeader(:blabla="blabla" :side="true")
      v-simple-table
        template(v-slot:default='')
          thead
            tr
              th.text-left
                | Formule
              th.text-left
                | Tarif
          tbody
            tr(v-for="formule in formules" :key="formule.id")
              td.pa-3
                .font-weight-medium.text-uppercase {{ formule.name }}
                br
                span(v-for="item in formule.items")
                  | {{ item }}
              td {{ formule.price + '€' }}
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
        title: "Les formules",
        teaser: "",
        text:
          "Chaque formule bénéficie d'un suivi sur 2 mois après la dernière séance.",
      },
      formules: [
        {
          id: 1,
          name: "L'essentielle silhouette (2 rendez-vous)",
          items: [
            " - Entretien découverte", 
            " - Colorimétrie", 
            " - Morpho style"
          ], 
          price: 249
        },
        {
          id: 2,
          name: "L'essentielle visage (3 rendez-vous + rdv coiffeur)",
          items: [
            " - Entretien découverte", 
            " - Colorimétrie", 
            " - Morpho visage + coiffure",
            " - Cosmétologie",
            " - Cours d'auto maquillage",
          ], 
          price: 299
        },
        {
          id: 3,
          name: "L'absolue (4 rendez-vous + rdv coiffeur)",
          items: [
            " - Entretien découverte", 
            " - Colorimétrie", 
            " - Cosmétologie",
            " - Morpho visage et coiffure",
            " - Accompagnement coiffeur",
            " - Cours d'auto maquillage"
          ],
          price: 499
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
