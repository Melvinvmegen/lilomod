<template lang="pug">
  div.flex
    h1 Hello je suis contacts
    router-link(to='/contacts/new') Nouveau contact
    v-simple-table
      template(v-slot:default='')
        thead
          tr
            th.text-left
              | Nom
            th.text-left
              | Prénom
            th.text-left
              | Email
            th.text-left
              | Téléphone
            th.text-left
              | Demande
            th.text-left
              | Edit/DELETE
        tbody
          tr(v-for='contact in contacts' :key='contact.id')
            td {{ contact.name }}
            td {{ contact.firstname }}
            td {{ contact.email }}
            td {{ contact.phone }}
            td {{ contact.query }}
            td
              router-link(:to="{name: 'ContactEdit', params: {id: contact.id}}") Edit
              button(@click="deleteContact(contact.id)" :key='contact.id') Delete

    router-view

</template>

<script>
import axios from 'axios'

export default {
  data: function() {
    return {
      contacts: [

      ]
    }
  }, 
  created: function () {
    axios.get('api/contacts')
      .then(res => {
        res.data.forEach(post => {
          this.contacts.push(post)
        });
      })
  },
  methods: {
    deleteContact (contactId) {
      axios.delete(`api/contacts/${contactId}`)
        .then(this.contacts.find(contact => {
        if (contact.id === contactId) {
          this.contacts.splice(contact, 1)
          return
        }
        else {
          return
        }
      }))
    }
  }
}
</script>

<style>

</style>