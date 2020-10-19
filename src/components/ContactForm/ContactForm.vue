<template lang="pug">
.row.justify-center.contact-container.col-lg-9.col-md-10
 form.col-lg-10(ref="form")
  h2.text-center Formulaire de contact
  br
  v-alert(v-if="success" dense elevation="2" type="success") {{ success }}
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
  .d-flex
    .form-button.my-2.mr-2
      v-btn(color='success' :disabled="$v.$invalid" @click.prevent="onSubmit" ref="button")
        | Prendre contact
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'ArticleEdit',
  data: function() {
    return {
      contactData: {
        name: '',
        firstname: '',
        email: '',
        phone: '',
        query: ''
      },
      error: '',
      success: null
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
      this.$store.dispatch('addContact', {
        name: this.contactData.name, 
        firstname: this.contactData.firstname,
        email: this.contactData.email,
        phone: this.contactData.phone,
        query: this.contactData.query
      })
        .then(() => {
          var self = this
          Object.keys(this.contactData).forEach(function (key) {
            self.contactData[key] = ''
          })
          this.success = "Votre prise de contact a bien été envoyée"
        })
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
  .contact-container {
    box-shadow: rgba(0, 0, 0, 0.03) 0px 24px 32px, rgba(0, 0, 0, 0.06) 0px 8px 32px;
    padding: 62px;
    margin: -5vh 30px -5vh;
    position: absolute;
    width: 70%;
    left: -3vh;
  }

  @media only screen and (max-width: 960px) {
    .contact-container {
      left: 0 !important;
      right: 0;
      margin: auto;
    }
  }

  @media only screen and (max-width: 960px) {
    .contact-container {
      padding: 25px !important;
    }
  }
</style>