<template lang="pug">
  v-pagination(v-model="currentPage" :length="pages" @input="this.$parent.nextPage" v-if="pages > 1" class="pagination")
</template>

<script>
export default {
  props: {
    initialPage: {
      type: Number,
      default: 1
    },
    pages: Number
  },
  data() {
    return {
      currentPage: this.initialPage
    };
  }
};
</script>

<style>
.pagination {
  margin-top: 20px;
}
</style>
