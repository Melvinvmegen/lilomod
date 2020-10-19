<template lang="pug">
  .section-home(v-if="upside" :class="{'flex-column': $vuetify.breakpoint.smAndDown}")
    BannerRight.col-md-5.col-12(:image="image")
    BannerLeft.col-md-7.col-12(:blabla='blabla' :ctaText="ctaText" :link="link")
    .banner-bottom
      .banner-gradient
      .banner-cancel-gradient
  .section-home(v-else :class="{'flex-column-reverse': $vuetify.breakpoint.smAndDown}")
    BannerLeft.col-md-7.col-12(:blabla='blabla' :ctaText="ctaText" :link="link")
    BannerRight.col-md-5.col-12(:image="image")
    .banner-bottom
      .banner-gradient
      .banner-cancel-gradient
</template>

<script>
import BannerLeft from './BannerLeft/BannerLeft'
import BannerRight from './BannerRight/BannerRight'

export default {
  components: {
    BannerLeft,
    BannerRight
  },
  props: {
    blabla: Object,
    upside: Boolean,
    image: String,
    ctaText: String,
    link: String
  }
}
</script>

<style>
  .section-home {
    padding: 0;
    width: 100%;
    display: flex;
    position: relative;
    padding: 0;
    height: calc(100vh - 64px);
    min-height: 900px;
  }

  .banner-bottom {
    opacity: 0.16;
    z-index: 0;
  }

  .banner-gradient {
    position: absolute;
    bottom: 0%;
    left: 0%;
    width: 100%;
    height: 20%;
    background: linear-gradient(90deg,#ab6bff,#9ad5f9 15%,#575df0 35%,#ab6bff 50%,#9ad5f9 65%,#575df0 85%,#ab6bff);
    pointer-events: none;
  }

  .banner-cancel-gradient {
    position: absolute;
    bottom: 0%;
    left: 0%;
    width: 100%;
    height: 20%;
    background: linear-gradient(rgb(255, 255, 255) 0%, rgba(246, 246, 248, 0) 100%);
    pointer-events: none;
  }

  @media only screen and (max-width: 960px) {
    .section-home {
      height: 100vh !important;
    }

    .header-right {
      width: 100% !important;
      max-height: 20vh !important;
    }

    .header {
      max-height: 80vh !important;
    }
  }

  @media only screen and (max-width: 400px) {
    .header {
      max-height: 90vh !important;
    }

    .header-right {
      max-height: 10vh !important;
    }
  }

  @media only screen and (max-width: 330px) {
    .header {
      max-height: 95vh !important;
    }

    .header-right {
      max-height: 5vh !important;
    }
  }
</style>
