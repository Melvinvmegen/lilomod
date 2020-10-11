<template lang="pug">
  .d-flex
    v-container#blog(v-if="$route.name === 'Blog'")
      h1.text-center Bienvenu sur le blog Lilomod
      br
      h2.h4.font-italic.text-center Informations de qualité pour votre santé, prévention et bien-être
      br
      h3.text-center Retrouvez nos derniers articles mis en ligne :
      .row.justify-center
        .col-lg-10(v-for="article in articles" :key="article.name")
          BlogCard(:article="article")
          v-divider
          br
    router-view

</template>

<script>
import BlogCard from '../../components/BlogCard/BlogCard'

export default {
  name: 'Blog',
  components: {
    BlogCard
  },
  computed: {
    articles () {
      return this.$store.state.articles.articles
    }
  },
  created: function() {
    if (this.$store.state.articles.articles.length > 0) {
      return
    }
    this.$store.dispatch('getArticles')
  },
}
</script>

<style>
  h3.text-center:after {
    content: "";
    display: block;
    margin: 2rem auto 3rem;
    height: 15px;
    width: 65px;
    border-bottom: .1rem solid #d8d8d8;
  }
</style>