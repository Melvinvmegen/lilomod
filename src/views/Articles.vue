<template lang="pug">
  div#articles
    div.d-flex.justify-space-between
      h1 Articles
      router-link(to='/articles/new')
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

    router-view

</template>

<script>
export default {
  name: "Articles",
  computed: {
    articles () {
      return this.$store.state.articles.articles
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
    }
  }
}
</script>

<style>

</style>