<template lang="pug">
  .row
    .d-flex
      .col-md-4.d-md-block.bottom
        router-link(:to="{name: 'ArticleShow', params: {id: article.id}}")
          v-img(:lazy-src="'http://localhost:3000/' + article.image" :src="'http://localhost:3000/' + article.image" max-height="200" max-width="250")
      .col-md-8
        h3
          router-link.indigo--text.lighten-1(:to="{name: 'ArticleShow', params: {id: article.id}}") {{article.title}}
        | Publi&eacute; le {{ articleCreatedAt }}
        br
        br
        p.text-md
          | {{ article.teaser }}
        br
        v-icon mdi-clock-outline
        |  {{ lectureTime }}
        
</template>

<script>
export default {
  props: {
    article: Object
  },
  computed: {
    articleCreatedAt () {
      const date = new Date(this.article.created_at);
      return date.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    },
    lectureTime () {
      const lectureTime = this.article.description.replace(/(<([^>]+)>)/gi, "").length / 500
      if (lectureTime < 1) {
        return "1 minute"
      }
      return lectureTime + "minutes"
    }
  }
}
</script>

<style>
</style>
