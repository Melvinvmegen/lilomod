<template lang="pug">
  v-container#articleShow(v-if="dataReady")
    h1.text-center {{ article.title }}
    br
    .d-flex.justify-center
      v-img(:lazy-src="'http://localhost:3000/' + article.image" :src="'http://localhost:3000/' + article.image" max-height="500")
    br
    h3.font-italic.h4.text-center {{ article.teaser }}
    br
    span.font-italic Publié le {{ articleCreatedAt }}
    br
    .time
      v-icon mdi-clock-outline
      |  {{ lectureTime }}
    br
    .post-container
      span(v-html="article.description")
</template>

<script>
import axios from "axios";

export default {
  name: "articleShow",
  data: function() {
    return {
      article: {
        description: ""
      },
      dataReady: false
    };
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
      const lectureTime =
        this.article.description.replace(/(<([^>]+)>)/gi, "").length / 500;
      if (lectureTime < 1) {
        return "1 minute de lecture";
      }
      return lectureTime + "minutes de lecture";
    }
  },
  async created() {
    await axios.get(`/api/posts/${this.$route.params.id}`).then(res => {
      this.article = res.data;
      this.dataReady = true;
    });
  }
};
</script>

<style>
.post-container {
  max-width: 690px !important;
  margin: auto;
  margin-top: 100px;
}
</style>
