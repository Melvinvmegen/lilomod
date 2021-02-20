<template lang="pug">
  #blog
    Banner(:blabla='blabla', :image="image" :ctaText="ctaText" :link="link" :upside="true")
    .section
      v-container(v-if="$route.name === 'Blog'")
        TextHeader(:blabla="blabla2" :side="true")
        br
        .row.justify-center(v-if="articles.length > 0")
          .col-lg-4.col-md-6(v-for="article in articles" :key="article.id")
            ArticleCard(:article="article")

</template>

<script>
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import TextHeader from "../../components/TextHeader/TextHeader";
import Banner from "../../components/Banner/Banner";

export default {
  name: "Blog",
  components: {
    ArticleCard,
    TextHeader,
    Banner
  },
  data() {
    return {
      blabla: {
        title: "BLOG LILOMOD",
        teaser:
          "",
        text:
          "J’ai lancé mon blog en 2010. Je voulais parler de mode, ma passion depuis toujours. Mais des blogs mode ce n’était pas ce qui manquaient (déjà à l’époque) et le sujet est vaste. Je me suis rendue compte, alors, qu’on parlait peu de jeunes créateurs. Je ne parle pas de créateurs plus ou moins proches des rédactrices de mode. Non. Je parle de jeunes créateurs qui créent avec enthousiasme et authenticité. C’est ce côté-là de la mode qui me passionne et pour lequel j’ai une forte admiration."
      },
      blabla2: {
        title: "Bienvenu sur le blog Lilomod",
        teaser: "",
        text: "Rapidement j’ai décidé de poster des articles de jeunes créateurs pour lesquels j’avais eu un réel coup de cœur. Au fil de mes balades dans Paris, des salons de jeunes créateurs etc, j’ai fait de merveilleuses découvertes. Il y a tellement de personnes talentueuses et créatives ! Je vais donc continuer à vous faire découvrir des marques émergentes et des jeunes créateurs.  Mais également des marques éco-responsable peu connues du grand public."
      },
      ctaText: "Prendre contact",
      link: "/contact",
      image: "blog.jpg"
    };
  },
  computed: {
    articles() {
      return this.$store.state.articles.publishedArticles;
    }
  },
  created: function() {
    if (this.$store.state.articles.publishedArticles.length > 0) {
      return;
    }
    this.$store.dispatch("getPublishedArticles");
  }
};
</script>

<style scoped>
.section {
  width: 100%;
  min-height: 90vh;
  position: relative;
  align-items: center;
  margin-top: 100px;
}

.section-wrapper {
  width: 100%;
  position: relative;
  display: flex;
  margin-top: 100px;
}

h3.text-center:after {
  content: "";
  display: block;
  margin: 2rem auto 3rem;
  height: 15px;
  width: 65px;
  border-bottom: 0.1rem solid #d8d8d8;
}
</style>
