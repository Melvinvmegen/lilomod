<template lang="pug">
  .full 
    .d-flex
      Banner(:blabla='blabla', :image="image" :ctaText="ctaText" :link="link")
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
        title: "Bienvenue chez Lilomod",
        teaser: "De la colometrie à l'accompagnement shopping",
        text: `Quel bonheur de se sentir belle, confiante et en harmonie avec soi-même ! 
        Mais il est parfois difficile d’y parvenir seule. Je suis Laurence, votre conseillère en image. 
        Je vous accompagne avec bienveillance et empathie avec des techniques apprises durant ma formation à l’ESR Paris. `
      },
      ctaText: "Découvrez l'espace Blog",
      link: "/blog",
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
