<template lang="pug">
  #blog
    Banner(:blabla='blabla', :image="image" :ctaText="ctaText" :link="link" :upside="true")
    .section
      v-container(v-if="$route.name === 'Blog'")
        TextHeader(:blabla="blabla2" :side="true")
        br
        .row.justify-center
          .col-lg-4.col-md-6(v-for="article in articles" :key="article.id")
            ArticleCard(:article="article")
      router-view

</template>

<script>
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import TextHeader from '../../components/TextHeader/TextHeader'
import Banner from '../../components/Banner/Banner'

export default {
  name: 'Blog',
  components: {
    ArticleCard,
    TextHeader,
    Banner
  },
  data () {
    return {
      blabla: {
        title: 'BLOG LILOMOD',
        teaser: 'Informations de qualité pour votre santé, prévention et bien-être',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed ultrices magna. Duis quis pulvinar sem. In consectetur rhoncus enim sit amet ornare. Aliquam sit amet risus imperdiet, tincidunt urna in, pulvinar eros. Duis est purus, lacinia consequat interdum et, egestas at risus. Phasellus ac tincidunt nisl. Aenean tincidunt nulla porta, sodales ligula ut, tempus mauris. Retrouvez nos derniers articles mis en ligne :'
      },
      blabla2: {
        title: "Bienvenu sur le blog Lilomod",
        teaser: "Un petit bout de mon quotidien pour mes chers lectrices",
        text: ""
      },
      ctaText: 'Prendre contact',
      link: "/contact",
      image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=714&q=80"
    }
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

<style scoped>
  .section {
    width: 100%;
    min-height: 90vh;
    position: relative;
    align-items: center;
    margin-top: 100px
  }

  .section-wrapper {
    width: 100%;
    position: relative;
    display: flex;
    margin-top: 100px
  }

  h3.text-center:after {
    content: "";
    display: block;
    margin: 2rem auto 3rem;
    height: 15px;
    width: 65px;
    border-bottom: .1rem solid #d8d8d8;
  }
</style>