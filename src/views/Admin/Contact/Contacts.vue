<template lang="pug">
  div#contact
    div#contacts(v-if="$route.name === 'Contacts'")
      div.d-flex.justify-space-between
        h1 Contacts
        router-link(:to="{name: 'ContactNew'}")
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
                button(@click="deleteContact(contact)" :key='contact.id')
                  v-icon(medium) mdi-delete

      pagination(:initialPage="currentPage" :pages="pages")
    router-view

</template>

<script>
import pagination from '../../../components/Pagination/Pagination'

export default {
  name: "Contacts",
  components: {
    pagination
  },
  data () {
    return {
      currentPage: 1,
      perPage: 10
    }
  },
  computed: {
    contacts () {
      if (this.currentPage > 1) {
        return this.$store.state.contacts.contacts.slice(this.perPage * (this.currentPage - 1), this.perPage * this.currentPage)
      }
      return this.$store.state.contacts.contacts.slice(0, this.perPage)
    },
    contactsLength () {
      return this.$store.state.contacts.contacts.length
    },
    pages () {
      return Math.ceil(this.$store.state.contacts.contacts.length / 10)
    }
  }, 
  created: function () {
    if (this.$store.state.contacts.contacts.length > 0) {
      return
    }
    this.$store.dispatch('getContacts')
  },
  methods: {
    deleteContact (contact) {
      const result = confirm(`Vous êtes sur de vouloir supprimer la contact ${contact.name}`)
      if (result) {
        this.$store.dispatch('deleteContact', contact)
      }
    },
    nextPage (page) {
      this.currentPage = page
      this.$router.replace({ query: { page: page } })
    }
  }
}
</script>

<style>

</style>