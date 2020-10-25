<template lang="pug">
  div#article
    div#articles(v-if="$route.name === 'Articles'")
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
              td(v-if="article.featured" @click="updateFeatured(article)")
                v-icon mdi-star
              td(v-else @click="updateFeatured(article)")
                v-icon mdi-star-outline
              td(v-if="article.published" @click="updatePublished(article)") Oui
              td(v-else @click="updatePublished(article)") Non
              td.d-flex.align-center
                router-link(:to="{name: 'ArticleEdit', params: {id: article.id}}")
                  v-icon(medium) mdi-pen
                button(@click="deleteArticle(article)" :key='article.id')
                  v-icon(medium) mdi-delete
      pagination(:initialPage="currentPage" :pages="pages")
    router-view
</template>

<script>
import pagination from "../../../components/Pagination/Pagination";

export default {
  name: "Articles",
  components: {
    pagination
  },
  data() {
    return {
      currentPage: 1,
      perPage: 10
    };
  },
  computed: {
    articles() {
      if (this.currentPage > 1) {
        return this.$store.state.articles.articles.slice(
          this.perPage * (this.currentPage - 1),
          this.perPage * this.currentPage
        );
      }
      return this.$store.state.articles.articles.slice(0, this.perPage);
    },
    articlesLength() {
      return this.$store.state.articles.articles.length;
    },
    pages() {
      return Math.ceil(this.$store.state.articles.articles.length / 10);
    }
  },
  created: function() {
    if (this.$store.state.articles.articles.length > 0) {
      return;
    }
    this.$store.dispatch("getArticles");
  },
  methods: {
    deleteArticle(article) {
      const result = confirm(
        `Vous êtes sur de vouloir supprimer l'article ${article.title}`
      );
      if (result) {
        this.$store.dispatch("deleteArticle", article);
      }
    },
    nextPage(page) {
      this.currentPage = page;
      this.$router.replace({ query: { page: page } });
    },
    updateFeatured(article) {
      this.$store.dispatch("updateArticle", {
        id: article.id,
        title: article.title,
        teaser: article.teaser,
        description: article.description,
        published: article.published,
        featured: !article.featured
      });
    },
    updatePublished(article) {
      this.$store.dispatch("updateArticle", {
        id: article.id,
        title: article.title,
        teaser: article.teaser,
        description: article.description,
        published: !article.published,
        featured: article.featured
      });
    }
  }
};
</script>

<style></style>
