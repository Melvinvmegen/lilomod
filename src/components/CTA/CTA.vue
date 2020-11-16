<template lang="pug">
  .my-2(:class="{centered: centered}")
    v-btn.white--text(:color='color' large='' :to="link")
      | {{ text }}
</template>

<script>
export default {
  props: {
    text: String,
    color: String,
    centered: Boolean,
    link: String
  }
};
</script>

<style>
.centered {
  display: flex;
  justify-content: center;
}
</style>
