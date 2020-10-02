import axios from 'axios'
import router from '../../router/index'

const state = {
    token: null,
    user: null
}

const getters = {
  user (state) {
    return state.user
  },
  isAuthenticated (state) {
    return state.token !== null
  }
}

const mutations = {
  authToken (state, userData) {
    state.token = userData.token
  },
  storeUser (state, user) {
    state.user = user
  },
  clearAuthData (state) {
    state.token = null
  }
}

const actions = {
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
}

export default {
  state,
  mutations,
  actions,
  getters
}