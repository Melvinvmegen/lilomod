<template lang="pug">
  v-container(:class="{'align-center': $vuetify.breakpoint.smAndDown}")
    h1.text-left(:class="{'text-center' : side}") {{ blabla.title }}
    br
    h3(:class="[side ? 'text-center' : 'text-justify']") {{ blabla.teaser }}
    p.subtitle-1(:class="[side ? 'text-center' : 'text-justify']" v-html="blabla.text")
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
</style>
