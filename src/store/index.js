import Vue from "vue"
import Vuex from "vuex"
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    user: null
  },
  getters: {
    user (state) {
      return state.user
    },
    isAuthenticated (state) {
      return state.token !== null
    }
  },
  mutations: {
    authToken (state, userData) {
      state.token = userData.token
    },
    storeUser (state, user) {
      state.user = user
    },
    clearAuthData (state) {
      state.token = null
    }
  },
  actions: {
    login ({commit, dispatch}, authData) {
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
          router.push('/dashboard')
        })
        .catch(error => error)
    },
    fetchUser ({commit}) {
      axios.get('api/users/current')
        .then(res => {
          commit('storeUser', res.data.user)
        })
    },
    tryAutoLogin ({commit}) {
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }
      commit('authToken', {
        token: token
      })
    },
    logout ({commit}) {
      commit('clearAuthData')
      localStorage.removeItem('token')
    }
  },
  modules: {}
});
