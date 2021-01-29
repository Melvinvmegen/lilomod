<template lang="pug">
  div 
    Banner(:blabla='blabla', :image="image" :ctaText="ctaText" :link="link")
    SectionService(:upside='true')
    SectionContact
    SectionTarifs
    SectionFormules
    SectionDistance
    SectionCard
</template>

<script>
import Banner from "../components/Banner/Banner";
import SectionService from "../components/SectionService/SectionService";
import SectionTarifs from "../components/SectionTarifs/SectionTarifs";
import SectionContact from "../components/SectionContact/SectionContact";
import SectionFormules from "../components/SectionFormules/SectionFormules";
import SectionCard from "../components/SectionCard/SectionCard";
import SectionDistance from "../components/SectionDistance/SectionDistance";

export default {
  name: "Services",
  components: {
    SectionService,
    SectionTarifs,
    SectionContact,
    SectionFormules,
    SectionDistance,
    Banner,
    SectionCard
  },
  data() {
    return {
      blabla: {
        title: "PRESTATIONS",
        teaser:
          "",
        text:
          "Vous allez découvrir ou redécouvrir la personne sublime que vous êtes et reprendre confiance en vous grâce à mes conseils prodigués et aux techniques que je vous révèlerais. Vous apprendrez les couleurs qui illuminent et rajeunissent votre visage, les coupes de vêtements qui valorisent votre silhouette, la coupe de cheveux la mieux adaptée à votre visage, les soins de beauté qui dévoileront votre beauté. <br> La bienveillance, l'empathie et le plaisir seront toujours au centre des séances, qu’elles soient individuelles, collectives ou à distance."
      },
      ctaText: "Prenons contact",
      link: "/contact",
      image:
        "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80 "
    };
  }
};
</script>

<style></style>
