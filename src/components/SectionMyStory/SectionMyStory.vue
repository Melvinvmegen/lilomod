<template lang="pug">
  .section.section-one#section-my-story
    a.section-anchor(id='Section-Cards')
    .section-main
      .section-wrapper(:class="{'flex-column' : upside}")
        TextHeader(:blabla="blabla" :side="true")
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
        title: "Mon parcours",
        teaser: "",
        text:
          "Passionnée de mode depuis toujours, j’ai étudié à l’IICC à Aix-en-Provence. J’y ai appris les formes, les couleurs, les matières. Arrivée à Paris, j’ai été styliste textile, assistante styliste et visuel merchandiser. En parallèle, j’ai créé mon blog de mode où je parle essentiellement de jeunes créateurs. J’ai eu la chance d’être chroniqueuse mode pendant 3mois sur la radio MOIfm. <br> La formation à l’ESR a confirmé que j’étais faite pour ce métier. Je vois tellement de femmes, qui, passées 35ans, se dévalorisent, ne sentent plus désirables… Elles voudraient changer mais seules n’osent pas, ou ne savent pas comment s’y prendre. J’ai choisi de devenir conseillère en image pour aider ces femmes à s’épanouir, leur faire prendre conscience de leur beauté et de leurs atouts",
      }
    };
  }
};
</script>

<style scoped>
.section {
  width: 100%;
  min-height: 10vh;
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
</style>
