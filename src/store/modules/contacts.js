import axios from 'axios'

const state = {
    contacts: []
}

const getters = {
  contacts (state) {
    return state.contacts
  }
}

const mutations = {
  setContacts (state, contactsData) {
    contactsData.forEach(contact => {
      state.contacts.push(contact)
    })
  },
  addContact (state, contactData) {
    state.contacts.push({
      id: contactData.id, 
      name: contactData.name, 
      firstname: contactData.firstname,
      email: contactData.email,
      phone: contactData.phone,
      query: contactData.query
    })
  },
  updateContact (state, contactData) {
    const contact = state.contacts.find(item => item.id === contactData.id)
    state.contacts.splice(state.contacts.indexOf(contact), 1, contactData)
  }
}

const actions = {
  getContacts ({commit}) {
    axios.get('api/contacts')
    .then(res =>  commit('setContacts', res.data))
  }, 
  addContact ({commit}, contactData) {
    axios.post('api/contacts', {
      name: contactData.name, 
      firstname: contactData.firstname,
      email: contactData.email,
      phone: contactData.phone,
      query: contactData.query
    })
      .then(res => {
        commit('addContact', {
          id: res.data.id,
          name: contactData.name, 
          firstname: contactData.firstname,
          email: contactData.email,
          phone: contactData.phone,
          query: contactData.query
        })
      })
      .catch(error => {
        if (error) {
          this.setError(error, "Une erreur s'est produite")
        }
      })
    },
    updateContact ({commit}, contactData) {
      axios.patch(`/api/contacts/${contactData.id}`, contactData)
        .then(() => {
          commit('updateContact', contactData)
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