<template lang="pug">
  .d-flex.flex-column.align-center.card-service
    v-img(:lazy-src="prestation.image" max-height="80" max-width="80" src="https://conseilenimage.jenniferettori.fr/wp-content/uploads/2019/08/pantone-80x80.png")
    br
    h3.text-center {{ prestation.name }}
    p.text-center {{ prestation.description }}
</template>

<script>
export default {
  props: {
    prestation: Object
  }
};
</script>
<style scoped>
.card-service {
  box-shadow: 0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.1);
  border: 0.1rem solid #e5f0f4;
  border-radius: 8%;
  border-radius: 16px;
  display: flex;
  height: 100%;
  position: relative;
  transition: all 0.3s ease 0s;
  text-align: center;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 12px 20px,
    rgba(0, 0, 0, 0.06) 0px 2px 12px;
}
</style>
