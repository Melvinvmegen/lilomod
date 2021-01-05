<template lang="pug">
  .full
    Banner(:blabla='blabla', :image="image" :upside='true' :ctaText="ctaText" :link="link")
    SectionAbout(:upside='true')
</template>

<script>
import SectionAbout from "../components/SectionAbout/SectionAbout";
import Banner from "../components/Banner/Banner";

export default {
  name: "Homepage",
  components: {
    SectionAbout,
    Banner
  },
  data() {
    return {
      blabla: {
        title: "Derrière Lilomod",
        teaser: "De la colometire au paramètre blabla",
        text:
          "Passionnée de mode depuis toujours, j’ai étudié à l’IICC à Aix-en-Provence. J’y ai appris les formes, les couleurs, les matières. Arrivée à Paris, j’ai été styliste textile, assistante styliste et visuel merchandiser. En parallèle, j’ai créé mon blog de mode où je parle essentiellement de jeunes créateurs. J’ai eu la chance d’être chroniqueuse mode pendant 3mois sur la radio MOIfm. <br> Ne me sentant plus en accord avec ma vie professionnelle, j’ai recherché un métier plus en phase avec ma passion, ma personnalité et mes valeurs humaines. C’est ainsi que j’ai découvert celui de conseillère en image. Et ça a été LA révélation ! <br> La formation à l’ESR a confirmé que j’étais faite pour ce métier. Je vois tellement de femmes, qui, passées 35ans, se dévalorisent, ne sentent plus désirables… Elles voudraient changer mais seules n’osent pas, ou ne savent pas comment s’y prendre. J’ai choisi de devenir conseillère en image pour aider ces femmes à s’épanouir, leur faire prendre conscience de leur beauté et de leurs atouts."
      },
      ctaText: "Prendre contact",
      link: "/contact",
      image:
        "https://images.unsplash.com/photo-1560243563-062bfc001d68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
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
