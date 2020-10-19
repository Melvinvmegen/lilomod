<template lang="pug">
  .section#section-contact
    a.section-anchor(id='Section-Tarifs')
    .section-main
      .section-wrapper(:class="{'flex-column' : upside, 'flex-column': $vuetify.breakpoint.smAndDown}")
        .header-right.sm.col-md-5.col-12
          .d-flex.justify-center
            v-img(:src="image" :max-width="maxWidth")
        BannerLeft.col-md-7.col-12(:blabla='blabla' :ctaText="ctaText" :link="link" :contact="true")

</template>

<script>
import TextHeader from "../TextHeader/TextHeader";
import CTA from "../CTA/CTA";
import BannerLeft from "../Banner/BannerLeft/BannerLeft";
import contact_img from "./contact_lilomod.png";

export default {
  components: {
    TextHeader,
    CTA,
    BannerLeft
  },
  computed: {
    maxWidth() {
      if (this.$vuetify.breakpoint.xs) {
        return 300;
      }
      return 357;
    }
  },
  data() {
    return {
      blabla: {
        title: "Il y a le travail...",
        teaser: "et la VIE au travail !",
        text:
          "Chez Swile, nous pensons que le bien-être est un accélérateur de performance. Notre objectif ? Vous donner les clés pour améliorer la vie au travail et augmenter vos chances d’avoir des salariés heureux !"
      },
      ctaText: "Contactez-moi",
      image: contact_img,
      link: "/contact"
    };
  }
};
</script>

<style scoped>
.section {
  width: 100%;
  min-height: 50vh;
  position: relative;
  align-items: center;
}

.section-main {
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.color-purple {
  background: linear-gradient(
    90deg,
    #ab6bff,
    #9ad5f9 15%,
    #575df0 35%,
    #ab6bff 50%,
    #9ad5f9 65%,
    #575df0 85%,
    #ab6bff
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.section-main::before {
  content: "";
  position: absolute;
  width: 100%;
  height: calc(100% - 0px);
  padding: 40px 140px;
  background-size: 75% 100%;
  background-clip: content-box;
  background-position: center center;
  background-image: linear-gradient(
    90deg,
    #ab6bff,
    #9ad5f9 15%,
    #575df0 35%,
    #ab6bff 50%,
    #9ad5f9 65%,
    #575df0 85%,
    #ab6bff
  );
  z-index: 1;
  display: block;
  filter: blur(40px);
}

.section-wrapper {
  width: 100%;
  position: relative;
  display: flex;
  margin-top: 100px;
  z-index: 1;
  background: white;
  min-height: 300px;
}

@media only screen and (max-width: 960px) {
  .section {
    height: 100vh !important;
  }

  .container {
    padding: 0 !important;
  }

  .section-main::before {
    padding: 20px 80px !important;
  }

  .header-left {
    max-height: 40vh !important;
  }

  .header-right {
    max-height: 40vh !important;
  }
}

@media only screen and (max-width: 400px) {
  .section {
    height: 100% !important;
  }
}

@media only screen and (max-width: 400px) {
  .section {
    min-height: 110vh !important;
  }
}
</style>
