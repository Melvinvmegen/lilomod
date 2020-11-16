import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import vuetify from "./plugins/vuetify";
import Vuelidate from "vuelidate";
import VueMeta from 'vue-meta';

Vue.use(Vuelidate);
Vue.use(VueAxios);
Vue.use(VueMeta);
axios.defaults.baseURL = "https://lilomod.herokuapp.com/";
axios.defaults.headers.get["Accepts"] = "application/json";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),

  created() {
    axios.interceptors.request.use(config => {
      if (window.localStorage.getItem("token")) {
        config.headers.Authorization = `Bearer ${window.localStorage.getItem(
          "token"
        )}`;
      }
      return config;
    });

    axios.interceptors.response.use(response => {
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
      return response;
    });
  }
}).$mount("#app");
