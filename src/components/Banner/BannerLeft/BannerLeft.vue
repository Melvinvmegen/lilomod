<template lang="pug">
  .header
    v-container.col-md-9.col-11.justify-center(:class="{'header-container' : !contact }")
      TextHeader(:blabla="blabla" :side="$vuetify.breakpoint.smAndDown")
        CTA(v-if="ctaText" :className="true" color="purple darken-3" :text="ctaText" :link="link")
</template>

<script>
import CTA from "../../CTA/CTA";
import TextHeader from "../../TextHeader/TextHeader";

export default {
  components: {
    CTA,
    TextHeader
  },
  props: {
    blabla: Object,
    ctaText: String,
    link: String,
    contact: Boolean
  }
};
</script>

<style>
.header {
  position: relative;
  text-align: justify;
  display: flex;
  width: 100%;
  margin: auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.cta-wrapper-home {
  height: 80%;
}

.home-text {
  margin: 50px 0;
  line-height: 2;
  font-size: 16px;
}
</style>
