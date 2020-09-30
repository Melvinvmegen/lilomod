import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    user: null
  },
  getters: {
    user (state) {
      return state.user
    }
  },
  mutations: {
    authToken (state, userData) {
      state.token = userData.token
    },
    storeUser (state, user) {
      state.user = user
    }
  },
  actions: {
    login ({commit, dispatch}, authData) {
      console.log(authData)
      axios.post('api/users/sign_in', {
        user: {
          email: authData.email,
          password: authData.password
        }
      })
        .then(res => {
          commit('authToken', {
            token: res.data.token
          })
          dispatch('fetchUser')
        })
        .catch(error => console.log(error))
    },
    fetchUser ({commit}) {
      axios.get('api/users/current')
        .then(res => {
          commit('storeUser', res.data.user)
        })
    }
  },
  modules: {}
});
