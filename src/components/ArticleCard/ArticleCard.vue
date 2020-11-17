<template lang="pug">
  v-card.mx-auto.my-12.article-card(max-width='374' :to="{name: 'ArticleShow', params: {id: article.id}}")
    template(slot='progress')
      v-progress-linear(color='deep-purple' height='10' indeterminate='')
    v-img(v-if="article.image" height='250' :src='article.image.url')
    v-card-title {{ article.title }}
    v-card-subtitle {{ article.teaser }}
    v-card-text(v-html="articleDescription")
    v-card-subtitle
      span Publié le {{ articleCreatedAt }}
    v-divider.mx-4
    v-card-actions.d-flex.justify-space-between
      v-btn(color='deep-purple lighten-2' text='' :to="{name: 'ArticleShow', params: {id: article.id}}")
        | Découvrir l'article
      .mr-3.article-time
        v-icon mdi-clock-outline
        |  {{ lectureTime }}
</template>

<script>
export default {
  name: "articleCard",
  props: {
    article: Object,
  },
  computed: {
    articleCreatedAt() {
      const date = new Date(this.article.created_at);
      return date.toLocaleDateString("fr-FR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    },
    lectureTime() {
      const lectureTime = this.article.description.replace(/(<([^>]+)>)/gi, "").length / 500;
      if (lectureTime < 1) {
        return "1 minute";
      }
      return Math.round(lectureTime) + " minutes";
    },
    articleDescription() {
      const description = this.article.description.replace(/(<([^>]+)>)/gi, "");
      return description.length > 50
        ? description.substring(0, 60) + "..."
        : description;
    }
  }
};
</script>

<style>
.article-card {
  border-radius: 16px !important;
}

.article-time {
  color: black;
}

@media only screen and (max-width: 400px) {
  .article-time {
    font-size: 12px;
  }
}

@media only screen and (max-width: 330px) {
  .article-time {
    display: none;
  }
}
</style>
