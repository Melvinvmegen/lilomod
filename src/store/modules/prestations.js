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
  },
  updatePrestation (state, prestationData) {
    const prestation = state.prestations.find(item => item.id === prestationData.id)
    state.prestations.splice(state.prestations.indexOf(prestation), 1, prestationData)
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
    },
    updatePrestation ({commit}, prestationData) {
      axios.patch(`/api/services/${prestationData.id}`, prestationData)
        .then(() => {
          commit('updatePrestation', prestationData)
        })
        .catch(error => {
          console.log(error)
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