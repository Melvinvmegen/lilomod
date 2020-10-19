<template lang="pug">
  .section.section-one#section-blog
    a.section-anchor(id='Developpeur-Front-end')
    .section-main
      .section-wrapper
        TextHeader(:blabla="blabla" :side="true")
      .d-flex.justify-space-around.flex-wrap(v-if="featuredArticles.length > 0")
        .col-lg-4(v-for="article in featuredArticles" :key="article.name")
          ArticleCard(:article="article")
    br
    CTA(:className="true", text="Découvrez tous mes articles" color="purple darken-3" :centered="true" link="/blog")
    br
</template>

<script>
import TextHeader from '../TextHeader/TextHeader'
import CTA from '../CTA/CTA'
import ArticleCard from '../../components/ArticleCard/ArticleCard'

export default {
  components: {
    TextHeader,
    CTA,
    ArticleCard
  },
  data() {
    return {
      blabla: {
        title: 'Lilomod Blog',
        teaser: 'Découvrez les articles préférés des lecteurs',
        text: 'Vivamus at risus convallis, scelerisque felis ac, rhoncus magna. Vivamus iaculis est diam, non malesuada turpis elementum vitae. Morbi dictum, ante sit amet scelerisque sollicitudin, diam elit rutrum risus, ut lacinia dolor augue sit amet nibh. Praesent tempus, urna vitae vulputate gravida, dui metus eleifend tortor, eu commodo sem purus ut eros. In faucibus suscipit gravida. Nulla egestas id sem id rutrum. Phasellus porttitor viverra rutrum. Pellentesque ultricies, augue eu viverra molestie, mi massa varius nulla, nec placerat lacus neque et mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper congue mauris, ac aliquam diam auctor ut.'
      }
    }
  },
  computed: {
    featuredArticles () {
      return this.$store.state.articles.featuredArticles
    }
  },
  created: function() {
    console.log(this.$store.state.articles.featuredArticles)
    if (this.$store.state.articles.featuredArticles.length > 0) {
      return
    }
    this.$store.dispatch('getFeaturedArticles')
  }
}
</script>

<style scoped>
.section {
  width: 100%;
  min-height: 90vh;
  position: relative;
  align-items: center;
}

.section-main {
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.section-wrapper {
  width: 100%;
  position: relative;
  display: flex;
  margin-top: 100px;
}

.section-left {
  position: relative;
  margin-right: 5%;
  left: 0;
  max-width: 50%;
  flex: 0 0 50%;
}

.section-right {
  flex: 0 0 50%;
  max-width: 50%;
  text-align: center;
}

.section-wrapper-image {
  position: absolute;
  height: 100%;
  width: 100%;
  background: url(https://images.unsplash.com/photo-1510511336377-1a9caa095849?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80);
  background-size: cover;
  background-position: center;
}

.section-wrapper-right {
  display: inline-block;
}

@media only screen and (max-width: 600px) {
  .section {
    min-height: 100vh;
  }
}
</style>
