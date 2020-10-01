<template lang="pug">
.flex
 h1 Hello je suis article edit
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
   ) Editer l'article
</template>

<script>
import axios from 'axios'
import { required } from 'vuelidate/lib/validators'

export default {
  name: 'ArticleEdit',
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
  created: function () {
    axios.get(`/api/posts/${this.$route.params.id}`)
      .then(res => {
        this.articleData = res.data
      })
  },
  methods: {
    onSubmit () {
      axios.patch(`/api/posts/${this.articleData.id}`, {
        title: this.articleData.title, 
        teaser: this.articleData.teaser,
        description: this.articleData.description,
        published: this.articleData.published,
        featured: this.articleData.featured
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