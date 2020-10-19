<template lang="pug">
  .my-2(:class="{centered: centered}")
    v-btn(:color='color' dark='' large='' :to="link")
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
