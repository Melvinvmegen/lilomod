<template lang="pug">
  div#articles
    div.d-flex.justify-space-between
      h1 Articles
      router-link(:to="{name: 'ArticleNew'}")
        v-btn(
          class="mx-2"
          fab
          dark
          color="indigo"
        )
          v-icon(dark) mdi-plus
    h3.subtitle-1 Vous trouverez ci-dessous tous vos articles de blog.
    br
    v-divider
    br
    br
    v-simple-table
      template(v-slot:default='')
        thead
          tr
            th.text-left
              | Titre
            th.text-left
              | Teaser
            th.text-left
              | Contenu
            th.text-left
              | Mise en avant
            th.text-left
              | Publié
            th.text-left
              | Actions
        tbody
          tr(v-for='article in articles' :key='article.id')
            td {{ article.title }}
            td {{ article.teaser }}
            td {{ article.description.replace(/(<([^>]+)>)/gi, "").length > 50 ? article.description.replace(/(<([^>]+)>)/gi, "").substring(0, 60) + "..." : article.description.replace(/(<([^>]+)>)/gi, "") }}
            td {{ article.featured }}
            td {{ article.published }}
            td
              router-link(:to="{name: 'ArticleEdit', params: {id: article.id}}")
                v-icon(medium) mdi-pen
              button(@click="deleteArticle(article)" :key='article.id')
                v-icon(medium) mdi-delete
    v-pagination(v-model="currentPage" :length="pages" @input="nextPage")
    router-view
</template>

<script>
export default {
  name: "Articles",
  data () {
    return {
      currentPage: 1,
      perPage: 10
    }
  },
  computed: {
    articles () {
      if (this.currentPage > 1) {
        return this.$store.state.articles.articles.slice(this.perPage * (this.currentPage - 1), this.perPage * this.currentPage)
      }
      return this.$store.state.articles.articles.slice(0, this.perPage)
    },
    articlesLength () {
      return this.$store.state.articles.articles.length
    },
    pages () {
      return Math.ceil(this.$store.state.articles.articles.length / 10)
    }
  },
  created: function () {
    if (this.$store.state.articles.articles.length > 0) {
      return
    }
    this.$store.dispatch('getArticles')
  },
  methods: {
    deleteArticle (article) {
      const result = confirm(`Vous êtes sur de vouloir supprimer l'article ${article.title}`)
      if (result) {
        this.$store.dispatch('deleteArticle', article)
      }
    },
    nextPage (page) {
      this.currentPage = page
      this.$router.replace({ query: { page: page } })
    }
  }
}
</script>

<style>

</style>