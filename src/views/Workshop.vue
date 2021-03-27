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
          ""
      },
      ctaText: "Prenons contact",
      link: "/contact",
      image: "ateliers.jpg"
    };
  }
};
</script>