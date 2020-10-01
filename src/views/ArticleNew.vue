<template lang="pug">
.flex
 h1 Hello je suis article new
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
   v-text-field#teaser.form-control(
    label="Description",
    type="text",
    v-model.lazy="articleData.description",
    @blur="$v.articleData.description.$touch()"
   )
   v-switch(v-model='articleData.published' :label='`Publié: ${articleData.published.toString()}`')
   v-switch(v-model='articleData.featured' :label='`Mis en avant: ${articleData.featured.toString()}`')
  .form-button
   button.button-form(
    type="submit",
    :disabled="$v.$invalid",
    @click.prevent="onSubmit",
    ref="button"
   ) Créer un nouvel article
</template>

<script>
import axios from 'axios'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'ArticleNew',
  data: function() {
    return {
      articleData: {
        title: '',
        teaser: '',
        description: '',
        published: false,
        featured: false
      },
      error: ''
    }
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
  methods: {
    onSubmit () {
      axios.post('api/posts', {
        title: this.articleData.title, 
        teaser: this.articleData.teaser,
        description: this.articleData.description,
        published: this.articleData.published,
        featured: this.articleData.featured,

      })
        .then(this.$router.push("/articles"))
        .catch(error => {
          if (error) {
            this.setError(error, "Une erreur s'est produite")
          }
        })
    },
    setError (error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text
    }
  }
}
</script>

<style>
</style>