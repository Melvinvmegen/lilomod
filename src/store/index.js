import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import articles from "./modules/articles";
import prestations from "./modules/prestations";
import contacts from "./modules/contacts";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    articles,
    prestations,
    contacts
  }
});
