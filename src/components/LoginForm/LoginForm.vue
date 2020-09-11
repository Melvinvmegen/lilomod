<template lang="pug">
  form(ref="form")
    span.error-message(v-if="error") {{ error }}
    .form-group(:class="{invalid: $v.userData.email.$error}")
      input(type="text" id="email" placeholder="Email" class="form-control" v-model.lazy="emailValue" @blur="$v.userData.name.$touch()")
    .form-group(:class="{invalid: $v.userData.password.$error}")
      input(type="text" id="password" placeholder="Mot de pass" class="form-control" v-model.lazy="passwordValue" @blur="$v.userData.company.$touch()")
    .form-button
      button.button-form(type="submit" :disabled="$v.$invalid" @click.prevent="onSubmit" ref="button") Se connecter
</template>

<script>
import axios from 'axios'
import { required, email } from 'vuelidate/lib/validators'
export default {
  data: function () {
    return {
      userData: {
        email: '',
        password: '',
      },
      error: ''
    }
  },
  validations: {
    userData: {
      email: {
        required,
        email
      },
      password: {
        email
      }
    },
    query: {
      required
    }
  },
  methods: {
    onSubmit () {
      const formData = {
        name: this.userData.name,
        entreprise: this.userData.entreprise,
        email: this.userData.email,
        city: this.userData.city,
        query: this.query
      }
      axios.post('/contacts', formData)
        .then((response) => {
          if (response) {
            var self = this
            Object.keys(this.userData).forEach(function (key) {
              self.userData[key] = ''
            })
            this.query = ''
            this.error = ''
          }
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
  form {
    width: 100%;
  }

  .form-group {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
  }

  .form-group input {
    margin: 0;
    padding: 5px 20px;
    height: 54px;
    border-radius: 0;
    color: #0b0c11;
    display: block;
    width: 80%;
    margin: 0 auto!important;
    box-sizing: border-box;
    background: #fff!important;
    box-shadow: 2px 2px 5px rgba(0,0,0,.1)!important;
    border-radius: 8px!important;
    border: 1px solid #e7e7e7!important;
  }

  .form-group textarea {
    margin: 0;
    padding: 5px 20px;
    height: 54px;
    border-radius: 0;
    color: #0b0c11;
    display: block;
    width: 80%;
    margin: 0 auto!important;
    box-sizing: border-box;
    background: #fff!important;
    box-shadow: 2px 2px 5px rgba(0,0,0,.1)!important;
    border-radius: 8px!important;
    border: 1px solid #e7e7e7!important;
  }

  .input-large {
    height: 100px !important;
  }

  .form-button {
    margin-top: 30px;
    width: 100%;
    text-align: center;
  }

  .button-form {
    width: 76%;
    padding: 0 1.5rem;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    font-size: 16px;
    font-weight: 700;
    border: 1px solid transparent;
    border-radius: .325rem;
    background: #f9423a;
    border: 2px solid #fff;
    color: #fff!important;
    height: 54px;
    line-height: 54px;
  }

  .button-form:disabled {
    border: 2px solid #fff;
    color: #ccc!important;
    cursor: not-allowed;
  }

  .invalid input {
    border: 1px solid red !important;
  }

  .invalid textarea {
    border: 1px solid red !important;
  }

  .error-message {
    color: #0b0c11;
    display: block;
    width: 80%;
    margin: 0 auto!important;
    font-style: italic;
  }
</style>
