<template lang="pug">
  .d-flex
    SideBar
    v-container
      #admin
        #dashboard(v-if="$route.name === 'Admin'")
          h1 Bienvenu sur le dashboard Lilomod
          h3.subtitle-1 Vous trouverez ci-dessous un résumé des dernieres activités.
          br
          v-divider
          br
          br
          h3 Le dernier article mis en ligne
          br
          v-simple-table
            template(v-slot:default='')
              thead
                tr
                  th.text-left
                    | Titre
                  th.text-left
                    | Teaser
                  th.text-left
                    | Contenu
                  th.text-left
                    | Mise en avant
                  th.text-left
                    | Publié
                  th.text-left
                    | Actions
              tbody
                tr
                  td {{ last_post.title }}
                  td {{ last_post.teaser }}
                  td {{ last_post.description.replace(/(<([^>]+)>)/gi, "").length > 50 ? last_post.description.replace(/(<([^>]+)>)/gi, "").substring(0, 60) + "..." : last_post.description.replace(/(<([^>]+)>)/gi, "") }}
                  td(v-if="last_post.featured")
                    v-icon mdi-star
                  td(v-else)
                    v-icon mdi-star-outline
                  td(v-if="last_post.published") Oui
                  td(v-else) Non
                  td
                    router-link(:to="{name: 'ArticleEdit', params: {id: last_post.id}}")
                      v-icon(medium) mdi-pen
          br
          br    
          h3 Les articles mis en avant
          br
          v-simple-table
            template(v-slot:default='')
              thead
                tr
                  th.text-left
                    | Titre
                  th.text-left
                    | Teaser
                  th.text-left
                    | Contenu
                  th.text-left
                    | Mise en avant
                  th.text-left
                    | Publié
                  th.text-left
                    | Actions
              tbody
                tr(v-for='article in featured_articles' :key='article.id')
                  td {{ article.title }}
                  td {{ article.teaser }}
                  td {{ article.description.replace(/(<([^>]+)>)/gi, "").length > 50 ? article.description.replace(/(<([^>]+)>)/gi, "").substring(0, 60) + "..." : article.description.replace(/(<([^>]+)>)/gi, "") }}
                  td(v-if="article.featured")
                    v-icon mdi-star
                  td(v-else)
                    v-icon mdi-star-outline
                  td(v-if="article.published") Oui
                  td(v-else) Non
                  td
                    router-link(:to="{name: 'ArticleEdit', params: {id: article.id}}")
                      v-icon(medium) mdi-pen
          br
          br
          h3 Vos derniers contacts
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
                tr(v-for='contact in last_contacts' :key='contact.id')
                  td {{ contact.name }}
                  td {{ contact.firstname }}
                  td {{ contact.email }}
                  td {{ contact.phone }}
                  td {{ contact.query }}
                  td
                    router-link(:to="{name: 'ContactEdit', params: {id: contact.id}}")
                      v-icon(medium) mdi-pen
        router-view

</template>

<script>
import axios from "axios";
import SideBar from "../../components/SideBar/SideBar";

export default {
  components: {
    SideBar
  },
  data() {
    return {
      last_post: { description: "" },
      featured_articles: [],
      last_contacts: []
    };
  },
  created: function() {
    axios.get("api/dashboard").then(res => {
      this.last_post = res.data.last_post;
      res.data.featured_posts.forEach(article => {
        this.featured_articles.push(article);
      });
      res.data.last_contacts.forEach(contact => {
        this.last_contacts.push(contact);
      });
    });
  }
};
</script>

<style scoped>
.d-flex {
  width: 100%;
  height: 100%;
}
</style>
