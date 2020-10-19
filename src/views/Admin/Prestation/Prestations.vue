<template lang="pug">
  div#prestation
    div#prestations(v-if="$route.name === 'Prestations'")
      div.d-flex.justify-space-between
        h1 Prestations
        router-link(:to="{name: 'PrestationNew'}")
          v-btn(
            class="mx-2"
            fab
            dark
            color="indigo"
          )
            v-icon(dark) mdi-plus
      h3.subtitle-1 Vous trouverez ci-dessous toutes vos prestations disponibles en ligne.
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
                | Prix
              th.text-left
                | Description
              th.text-left
                | Actions
          tbody
            tr(v-for='prestation in prestations' :key='prestation.id')
              td {{ prestation.name }}
              td {{ prestation.price }}
              td {{ prestation.description }}
              td
                router-link(:to="{name: 'PrestationEdit', params: {id: prestation.id}}")
                  v-icon(medium) mdi-pen
                button(@click="deletePrestation(prestation)" :key='prestation.id')
                  v-icon(medium) mdi-delete
      br
      pagination(:initialPage="currentPage" :pages="pages")
    router-view

</template>

<script>
import pagination from "../../../components/Pagination/Pagination";

export default {
  name: "Prestations",
  components: {
    pagination
  },
  data() {
    return {
      currentPage: 1,
      perPage: 10
    };
  },
  computed: {
    prestations() {
      if (this.currentPage > 1) {
        return this.$store.state.prestations.prestations.slice(
          this.perPage * (this.currentPage - 1),
          this.perPage * this.currentPage
        );
      }
      return this.$store.state.prestations.prestations.slice(0, this.perPage);
    },
    prestationsLength() {
      return this.$store.state.prestations.prestations.length;
    },
    pages() {
      return Math.ceil(this.$store.state.prestations.prestations.length / 10);
    }
  },
  created: function() {
    if (this.$store.state.prestations.prestations.length > 0) {
      return;
    }
    this.$store.dispatch("getPrestations");
  },
  methods: {
    deletePrestation(prestation) {
      const result = confirm(
        `Vous êtes sur de vouloir supprimer la prestation ${prestation.name}`
      );
      if (result) {
        this.$store.dispatch("deletePrestation", prestation);
      }
    },
    nextPage(page) {
      this.currentPage = page;
      this.$router.replace({ query: { page: page } });
    }
  }
};
</script>

<style></style>
