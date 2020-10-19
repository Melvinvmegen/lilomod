<template lang="pug">
  v-container(:class="{'align-center': $vuetify.breakpoint.smAndDown}")
    h1.text-left.color-purple(:class="{'text-center' : side}") {{ blabla.title }}
    br
    h3(:class="{'text-center' : side}") {{ blabla.teaser }}
    p.subtitle-1(:class="{'text-justify' : side}") {{ blabla.text }}
    slot
</template>

<script>
export default {
  props: {
    blabla: Object,
    side: Boolean
  }
};
</script>

<style scoped>
h1:after {
  content: "";
  display: block;
  margin-top: 1rem;
  height: 10px;
  width: 65px;
  border-bottom: 0.1rem solid #d8d8d8;
}

h1.text-center:after {
  content: "";
  display: block;
  margin: 2rem auto 1rem;
  height: 10px;
  width: 65px;
  border-bottom: 0.1rem solid #d8d8d8;
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
</style>
