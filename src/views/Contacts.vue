<template lang="pug">
  div#contacts
    div.d-flex.justify-space-between
      h1 Contacts
      router-link(to='/contacts/new')
        v-btn(
          class="mx-2"
          fab
          dark
          color="indigo"
        )
          v-icon(dark) mdi-plus
    h3.subtitle-1 Vous trouverez ci-dessous toutes vos demandes de contact issues de formulaire.
    br
    v-divider
    br
    br
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
              | Actions
        tbody
          tr(v-for='contact in contacts' :key='contact.id')
            td {{ contact.name }}
            td {{ contact.firstname }}
            td {{ contact.email }}
            td {{ contact.phone }}
            td {{ contact.query }}
            td
              router-link(:to="{name: 'ContactEdit', params: {id: contact.id}}")
                v-icon(medium) mdi-pen
              button(@click="deleteContact(contact.id)" :key='contact.id')
                v-icon(medium) mdi-delete

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