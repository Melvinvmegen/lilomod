<template lang="pug">
  v-container#articleShow(v-show="dataReady" ref="articleShow")
    h1.text-center {{ article.title }}
    br
    .d-flex.justify-center
      v-img(v-if="article.image" :lazy-src="article.image.url" :src='article.image.url' max-height="500")
    br
    h3.font-italic.h4.text-center {{ article.teaser }}
    br
    .d-flex.justify-space-between(:class="{'flex-column text-center': $vuetify.breakpoint.smAndDown}")
      span.font-italic Publié le {{ articleCreatedAt }}
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
      return Math.round(lectureTime) + " minutes de lecture";
    },
  },
  async created() {
    console.log()
    await axios.get(`/api/posts/${this.$route.params.id}`).then(res => {
      this.article = res.data;
      this.dataReady = true;
    });
  },
  mounted() {
    console.log('scrolling...', this.$refs.articleShow.offsetTop)
    this.$refs.articleShow.scrollIntoView({behavior: "smooth"});
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
