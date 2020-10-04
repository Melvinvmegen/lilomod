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
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}