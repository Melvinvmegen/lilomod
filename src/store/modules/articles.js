import axios from "axios";

const state = {
  articles: [],
  featuredArticles: [],
  publishedArticles: []
};
const getters = {
  articles(state) {
    return state.articles;
  }
};

const mutations = {
  setArticles(state, articlesData) {
    articlesData.forEach(article => {
      state.articles.push(article);
    });
  },
  setFeaturedArticles(state, featuredArticlesData) {
    featuredArticlesData.forEach(article => {
      state.featuredArticles.push(article);
    });
  },
  setPublishedArticles(state, publishedArticlesData) {
    publishedArticlesData.forEach(article => {
      state.publishedArticles.push(article);
    });
  },
  addArticle(state, articleData) {
    state.articles.unshift({
      id: articleData.id,
      title: articleData.title,
      teaser: articleData.teaser,
      description: articleData.description,
      published: articleData.published,
      featured: articleData.featured
    });
  },
  updateArticle(state, articleData) {
    const article = state.articles.find(item => item.id === articleData.id);
    state.articles.splice(state.articles.indexOf(article), 1, articleData);
  },
  deleteArticle(state, article) {
    state.articles.splice(state.articles.indexOf(article), 1);
  }
};

const actions = {
  getArticles({ commit }) {
    axios.get("api/posts").then(res => commit("setArticles", res.data));
  },
  getFeaturedArticles({ commit }) {
    axios
      .get("api/posts", { params: { featured: true } })
      .then(res => commit("setFeaturedArticles", res.data));
  },
  getPublishedArticles({ commit }) {
    axios
      .get("api/posts", { params: { published: true } })
      .then(res => commit("setPublishedArticles", res.data));
  },
  addArticle({ commit }, articleData) {
    const formData = new FormData();
    Object.keys(articleData).forEach(article => {
      formData.append(article, articleData[article]);
    });
    axios
      .post("api/posts", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      })
      .then(res => {
        commit("addArticle", {
          id: res.data.id,
          title: articleData.title,
          teaser: articleData.teaser,
          description: articleData.description,
          published: articleData.published,
          featured: articleData.featured
        });
      })
      .catch(error => {
        if (error) {
          this.setError(error, "Une erreur s'est produite");
        }
      });
  },
  updateArticle({ commit }, articleData) {
    const formData = new FormData();
    Object.keys(articleData).forEach(article => {
      if (article === 'image') {
        if (articleData[article].signed_id) {
          formData.append(article, articleData[article].signed_id);
        } else {
          formData.append(article, articleData[article]);
        }
      } else {
        formData.append(article, articleData[article]);
      }
    });
    axios
      .patch(`/api/posts/${articleData.id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" }
      })
      .then(() => commit("updateArticle", articleData))
      .catch(error => {
        if (error) {
          this.setError(error, "Une erreur s'est produite");
        }
      });
  },
  deleteArticle({ commit }, article) {
    axios
      .delete(`api/posts/${article.id}`)
      .then(() => commit("deleteArticle", article));
  }
};

export default {
  state,
  mutations,
  getters,
  actions
};
