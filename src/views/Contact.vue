<template lang="pug">
  div
    .section-home(:class="{'flex-column': $vuetify.breakpoint.smAndDown}")
      BannerLeft.col-md-7.col-12(:blabla='blabla')
      BannerRight.col-md-5.col-12(:contact="true")
      .banner-bottom
        .banner-gradient
        .banner-cancel-gradient
</template>

<script>
import BannerLeft from '../components/Banner/BannerLeft/BannerLeft'
import BannerRight from '../components/Banner/BannerRight/BannerRight'
import TextHeader from '../components/TextHeader/TextHeader'

export default {
  name: 'Contact',
  components: {
    BannerLeft,
    BannerRight,
    TextHeader
  },
  data () {
    return {
      blabla: {
        title: 'Hello, on discute ?',
        teaser: "Vous avez des questions ? ",
        text: 'Sed nec magna sed augue tempor iaculis a in sapien. Aenean dapibus felis enim, vel efficitur dui posuere at. Donec purus odio, posuere nec posuere sit amet, commodo ut erat. Donec et erat nibh. Pellentesque diam diam, congue vel aliquet ac, pretium non neque. Phasellus consectetur dui sed ligula dictum mollis ac eu mi. Praesent aliquam metus a augue tempor commodo. Cras venenatis, dui a eleifend blandit, dui nunc ullamcorper dolor, sit amet rutrum velit metus non erat.'
      }
    }
  }
}
</script>

<style scoped>
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
      height: 100% !important;
    }

    .header-right {
      width: 100% !important;
      min-height: 100vh !important;    
    }

    .header {
      margin: 0 !important;
    }

    .contact-container {
      width: 90% !important;
      left: 0 !important;
    }
  }

  @media only screen and (max-width: 600px) {
    .section-home {
      height: 100% !important;
    }

    .header-right {
      min-height: 800px;
      max-height: 100% !important;
    }
  }
</style>