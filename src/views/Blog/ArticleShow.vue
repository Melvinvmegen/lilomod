<template lang="pug">
  v-container#articleShow(v-if="dataReady")
    h1.text-center {{ article.title }}
    br
    .d-flex.justify-center
      v-img(:lazy-src="'http://localhost:3000/' + article.image" :src="'http://localhost:3000/' + article.image" max-height="500" max-width="350")
    br
    h3.font-italic.h4.text-center {{ article.teaser }}
    span.font-italic Publié le {{ articleCreatedAt }}
    span(v-html="article.description")
</template>

<script>

import axios from 'axios'

export default {
  name: 'articleShow',
  data: function() {
    return {
      article: {
        description: ''
      },
      dataReady: false
    }
  },
  computed: {
    articleCreatedAt () {
      const date = new Date(this.article.created_at);
      return date.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    },
  },
  async created () {
    await axios.get(`/api/posts/${this.$route.params.id}`)
      .then(res => {
        this.article = res.data
        this.dataReady = true
      })
  }
}
</script>

<style>

</style>