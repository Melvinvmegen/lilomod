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
        teaser: "",
        text: `Depuis des années, je vous fais découvrir des jeunes créateurs, des marques émergentes sur le blog lilomod.blogspot.com. 
               C’est une véritable passion et j’adore vous la partager. Je vais désormais, continuer ici.`
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
