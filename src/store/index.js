import Vue from "vue"
import Vuex from "vuex"
import auth from './modules/auth'
import articles from './modules/articles'
import prestations from './modules/prestations'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    articles,
    prestations
  }
});
