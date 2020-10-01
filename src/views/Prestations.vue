<template lang="pug">
  div.flex
    h1 Hello je suis prestations
    router-link(to='/prestations/new') Nouvelle prestation
    v-simple-table
      template(v-slot:default='')
        thead
          tr
            th.text-left
              | Nom
            th.text-left
              | Prix
            th.text-left
              | Description
            th.text-left
              | Edit/DELETE
        tbody
          tr(v-for='prestation in prestations' :key='prestation.id')
            td {{ prestation.name }}
            td {{ prestation.price }}
            td {{ prestation.description }}
            td
              router-link(:to="{name: 'PrestationEdit', params: {id: prestation.id}}") Edit
              button(@click="deletePrestation(prestation.id)" :key='prestation.id') Delete

    router-view

</template>

<script>
import axios from 'axios'

export default {
  data: function() {
    return {
      prestations: [

      ]
    }
  }, 
  created: function () {
    axios.get('api/services')
      .then(res => {
        res.data.forEach(post => {
          this.prestations.push(post)
        });
      })
  },
  methods: {
    deletePrestation (prestationId) {
      axios.delete(`api/services/${prestationId}`)
        .then(this.prestations.find(prestation => {
        if (prestation.id === prestationId) {
          this.prestations.splice(prestation, 1)
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