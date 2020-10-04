import axios from 'axios'

const state = {
    prestations: []
}

const getters = {
  prestations (state) {
    return state.prestations
  }
}

const mutations = {
  setPrestations (state, prestationsData) {
    prestationsData.forEach(prestation => {
      state.prestations.push(prestation)
    })
  },
  addPrestation (state, prestationData) {
    state.prestations.push({
      id: prestationData.id, 
      name: prestationData.name, 
      price: prestationData.price,
      description: prestationData.description,
    })
  }
}

const actions = {
  getPrestations ({commit}) {
    axios.get('api/services')
    .then(res =>  commit('setPrestations', res.data))
  }, 
  addPrestation ({commit}, prestationData) {
    axios.post('api/services', {
      name: prestationData.name, 
      price: prestationData.price,
      description: prestationData.description
    })
      .then(res => {
        commit('addPrestation', {
          id: res.data.id,
          name: prestationData.name, 
          price: prestationData.price,
          description: prestationData.description
        })
      })
      .catch(error => {
        if (error) {
          this.setError(error, "Une erreur s'est produite")
        }
      })
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}