<template lang="pug">
.flex
 h1 Hello je suis contact new
 form(ref="form")
  span.error-message(v-if="error") {{ error }}
  .form-group(:class="{ invalid: $v.contactData.name.$error }")
   v-text-field#name.form-control(
    label="Nom",
    type="text",
    v-model.lazy="contactData.name",
    @blur="$v.contactData.name.$touch()"
   )
   v-text-field#firstname.form-control( 
    label="Prénom",
    type="text",
    v-model.lazy="contactData.firstname",
    @blur="$v.contactData.firstname.$touch()"
   )
   v-text-field#email.form-control( 
    label="Email",
    type="text",
    v-model.lazy="contactData.email",
    @blur="$v.contactData.email.$touch()"
   )
   v-text-field#phone.form-control( 
    label="Téléphone",
    type="text",
    v-model.lazy="contactData.phone",
    @blur="$v.contactData.phone.$touch()"
   )
   v-textarea#query.form-control(
    label="Demande",
    type="text",
    auto-grow,
    v-model.lazy="contactData.query",
    @blur="$v.contactData.query.$touch()"
   )
  .form-button
   button.button-form(
    type="submit",
    :disabled="$v.$invalid",
    @click.prevent="onSubmit",
    ref="button"
   ) Créer un nouveau contact
</template>

<script>
import axios from 'axios'
import { email, required } from 'vuelidate/lib/validators'

export default {
  name: 'ArticleNew',
  data: function() {
    return {
      contactData: {
        name: '',
        firstname: '',
        email: '',
        phone: '',
        question: '',
      },
      error: ''
    }
  },
  validations: {
    contactData: {
      name: {
        required
      },
      firstname: {
        required
      },
      email: {
        required,
        email
      },
      phone: {
        required
      },
      query: {
        required
      }
    }
  },
  methods: {
    onSubmit () {
      axios.post('api/contacts', {
        name: this.contactData.name, 
        firstname: this.contactData.firstname,
        email: this.contactData.email,
        phone: this.contactData.phone,
        query: this.contactData.query
      })
        .then(this.$router.push("/contacts"))
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