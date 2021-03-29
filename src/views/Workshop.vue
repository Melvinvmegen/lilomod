<template lang="pug">
  div 
    Banner(:blabla='blabla', :image="image" :ctaText="ctaText" :link="link")
    SectionWorkshopIndividual
    SectionContact
    SectionWorkshopPro
</template>

<script>
import Banner from "../components/Banner/Banner";
import SectionWorkshopIndividual from "../components/SectionWorkshopIndividual/SectionWorkshopIndividual";
import SectionWorkshopPro from "../components/SectionWorkshopPro/SectionWorkshopPro";
import SectionContact from "../components/SectionContact/SectionContact";

export default {
  name: "Workshop",
  components: {
    Banner,
    SectionWorkshopIndividual,
    SectionWorkshopPro,
    SectionContact
  },
  data() {
    return {
      blabla: {
        title: "ATELIERS",
        teaser:
          "",
        text:
          "Si vous désirez apprendre à valoriser votre image en passant un agréable moment entre copines ou en famille, je vous propose un atelier pour les particuliers. Ensemble nous définirons les prestations en fonction de vos besoins et de vos envies. <br>Ces ateliers peuvent se faire à domicile. <br>Quant aux professionnels, cela peut se dérouler en groupe ou seul, selon les objectifs de votre entreprise (pour que l'image de vous collaborateurs soit en cohérence avec celle de votre boite, en vue de remercier votre fidèle clientèle, etc).  "
      },
      ctaText: "Prenons contact",
      link: "/contact",
      image: "ateliers.jpg"
    };
  }
};
</script>