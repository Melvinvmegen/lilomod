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
              button(@click="deleteArticle(article.id)" :key='article.id')
                v-icon(medium) mdi-delete

    router-view

</template>

<script>
import axios from 'axios'

export default {
  data: function() {
    return {
      articles: [

      ]
    }
  }, 
  created: function () {
    axios.get('api/posts')
      .then(res => {
        res.data.forEach(post => {
          this.articles.push(post)
        });
      })
  },
  methods: {
    deleteArticle (articleId) {
      axios.delete(`api/posts/${articleId}`)
        .then(this.articles.find(article => {
        if (article.id === articleId) {
          this.articles.splice(article, 1)
          return
        }
        else {
          return
        }
      }))
    }
  }
}
</script>

<style>

</style>