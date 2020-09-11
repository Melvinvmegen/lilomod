<template lang="pug">
  .div-marged
    h2.title-bold {{blabla.title}}
    h3.featured-item-subheader.italic.text-center {{blabla.subtitle}}
</template>

<script>
export default {
  props: {
    blabla: Object
  }
}
</script>

<style>
  .div-marged {
    margin: 30px;
  }

  .featured-item-subheader {
    color: #254A5D;
    font-size: 18px;
    text-decoration: none;
    line-height: 2.5;
    text-align: center;
  }
</style>
