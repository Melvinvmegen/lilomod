<template lang="pug">
  .full 
    .d-flex
      Banner(:blabla='blabla', :image="image" :ctaText="ctaText" :link="link", backgroundPosition='top')
    SectionAbout(:image='sectionAboutImage')
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
        text: `Quel bonheur de se sentir belle, confiante et en harmonie avec soi-même !  Mais il est parfois difficile d’y parvenir seule.  
              Je suis Laurence, votre conseillère en image et je vous accompagnerais avec bienveillance, empathie et enthousiasme grâce aux techniques apprises durant ma formation à l’ESR Paris.`
      },
      ctaText: "Découvrez l'espace Blog",
      link: "/blog",
      image: "home_image.jpg",
      sectionAboutImage: "conseil_en_image.jpg"
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
