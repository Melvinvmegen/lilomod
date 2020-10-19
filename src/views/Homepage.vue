<template lang="pug">
  .full 
    .d-flex
      Banner(:blabla='blabla', :image="image" :ctaText="ctaText")
    SectionAbout
    SectionService
    SectionBlog
</template>

<script>
import Banner from "../components/Banner/Banner";
import SectionAbout from "../components/SectionAbout/SectionAbout";
import SectionService from "../components/SectionService/SectionService";
import SectionBlog from "../components/SectionBlog/SectionBlog";

export default {
  name: "Homepage",
  components: {
    Banner,
    SectionAbout,
    SectionService,
    SectionBlog
  },
  data() {
    return {
      blabla: {
        title: "BIENVENUE SUR L'ESPACE LILOMOD",
        teaser: "De la colometire au paramètre blabla",
        text:
          "Je suis Jennifer, votre conseillère en image sur Aix-en-Provence et ses alentours, formée et diplômée en Conseil en image, Relooking et Personal Shopping chez JBM Consulting (centre de formation certifié). Je suis Jennifer, votre conseillère en image sur Aix-en-Provence et ses alentours, formée et diplômée en Conseil en image, Relooking et Personal Shopping chez JBM Consulting (centre de formation certifié)."
      },
      ctaText: "Découvrez en plus",
      image:
        "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
    };
  }
};
</script>

<style>
.full {
  width: 100%;
  height: 100%;
}
</style>
