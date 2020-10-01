<template lang="pug">
  div.flex
    h1 Hello je suis articles
    router-link(to='/articles/new') Nouvelle article
    v-simple-table
      template(v-slot:default='')
        thead
          tr
            th.text-left
              | Titre
            th.text-left
              | Teaser
            th.text-left
              | Description
            th.text-left
              | Mise en avant
            th.text-left
              | Publié
            th.text-left
              | Edit/DELETE
        tbody
          tr(v-for='article in articles' :key='article.id')
            td {{ article.title }}
            td {{ article.teaser }}
            td {{ article.description }}
            td {{ article.featured }}
            td {{ article.published }}
            td
              router-link(:to="{name: 'ArticleEdit', params: {id: article.id}}") Edit
              button(@click="deleteArticle(article.id)" :key='article.id') Delete

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