<template lang="pug">
.flex.col-11
 h1 Editer un article
 form(ref="form")
  span.error-message(v-if="error") {{ error }}
  .form-group(:class="{ invalid: $v.articleData.title.$error }")
   v-text-field#title.form-control(
    label="Titre",
    type="text",
    v-model.lazy="articleData.title",
    @blur="$v.articleData.title.$touch()"
   )
   v-text-field#teaser.form-control( label="Teaser",
    type="text",
    v-model.lazy="articleData.teaser",
    @blur="$v.articleData.teaser.$touch()"
   )
   vue-editor#description(
    label="Description",
    type="text",
    v-model.lazy="articleData.description",
    @blur="$v.articleData.description.$touch()"
    placeholder="Ecrivez ici le contenu de votre article, faites preuve de créativité !"
   )
   v-file-input(
      show-size
      counter
      label="Image"
      accept="image/*"
      @change="uploadImage"
   )
   v-card(v-if="articleData.image")
     v-img( height='250' :src='`${articleData.image.url}`')
     v-card-title.title
      | Image actuelle
   v-switch(v-model='articleData.published' :label='`Publié`')
   v-switch(v-model='articleData.featured' :label='`Mis en avant`')
  .d-flex
    .form-button.my-2.mr-2
      v-btn(color='success' :disabled="$v.$invalid" @click.prevent="onSubmit" ref="button")
        | Editer l'article
    .form-button.my-2
      v-btn(color='error' @click.prevent="$router.go(-1)")
        | Annuler
</template>

<script>
import axios from "axios";
import { required } from "vuelidate/lib/validators";
import { VueEditor } from "vue2-editor";

export default {
  name: "ArticleEdit",
  components: {
    VueEditor
  },
  data: function() {
    return {
      articleData: {
        title: "",
        teaser: "",
        description: "",
        published: false,
        featured: false,
        article: null
      },
      error: ""
    };
  },
  validations: {
    articleData: {
      title: {
        required
      },
      teaser: {
        required
      },
      description: {
        required
      }
    }
  },
  created: function() {
    axios.get(`/api/posts/${this.$route.params.id}`).then(res => {
      console.log(res.data)
      this.articleData = res.data;
    });
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("updateArticle", {
          id: this.$route.params.id,
          title: this.articleData.title,
          teaser: this.articleData.teaser,
          description: this.articleData.description,
          published: this.articleData.published,
          featured: this.articleData.featured,
          image: this.articleData.image
        })
        .then(this.$router.push({ name: "Articles" }))
        .catch(error => {
          if (error) {
            this.setError(error, "Une erreur s'est produite");
          }
        });
    },
    uploadImage(event) {
      this.articleData.image = event;
    },
    setError(error, text) {
      this.error =
        (error.response && error.response.data && error.response.data.error) ||
        text;
    }
  }
};
</script>

<style></style>
