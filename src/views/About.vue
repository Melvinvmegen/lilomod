<template lang="pug">
  .full
    Banner(:blabla='blabla', :image="image" :upside='true' :ctaText="ctaText" :link="link")
    SectionMyStory(:upside='true' :image='sectionAboutImage')
    SectionAbout(:upside='true' :image='sectionAboutImage')
</template>

<script>
import SectionMyStory from '../components/SectionMyStory/SectionMyStory'
import SectionAbout from "../components/SectionAbout/SectionAbout";
import Banner from "../components/Banner/Banner";

export default {
  name: "Homepage",
  components: {
    SectionAbout,
    Banner,
    SectionMyStory
  },
  data() {
    return {
      blabla: {
        title: "Derrière Lilomod",
        teaser: "",
        text:
          "Ne me sentant plus en accord avec ma vie professionnelle, j’ai recherché un métier plus en phase avec ma passion, ma personnalité et mes valeurs humaines. C’est ainsi que j’ai découvert celui de conseillère en image. Et ça a été LA révélation !"
      },
      ctaText: "Prendre contact",
      link: "/contact",
      image: "a_propos.jpg",
      sectionAboutImage: "conseil_en_image.jpg"
    };
  }
};
</script>

<style>
.full {
  height: 100%;
  width: 100%;
}
</style>
