<template lang="pug">
  form(ref="form")
    span.error-message(v-if="error") {{ error }}
    v-text-field#email.form-control(
      label="Email",
      type="text",
      v-model.lazy="userData.email",
      @blur="$v.userData.email.$touch()"
    )
    .password
      v-text-field#password.form-control( 
        label="Mot de passe",
        :type="passwordVisibility",
        v-model.lazy="userData.password",
        @blur="$v.userData.password.$touch()"
      )
      v-icon.password-visibility(@click="visibilePassword = !visibilePassword") {{ passwordIcon }}
    .d-flex
      .form-button.my-2.mr-2
        v-btn(color='success' :disabled="$v.$invalid" @click.prevent="onSubmit" ref="button")
          | Se connecter
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
export default {
  data: function() {
    return {
      userData: {
        email: "",
        password: ""
      },
      error: "",
      visibilePassword: false
    };
  },
  validations: {
    userData: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  },
  computed: { 
    passwordVisibility () {
      return this.visibilePassword ? 'text' : 'password'
    },
    passwordIcon () {
      return this.visibilePassword ? 'mdi-eye' : 'mdi-eye-off'
    }
  },
  methods: {
    onSubmit() {
      const formData = {
        email: this.userData.email,
        password: this.userData.password
      };
      this.$store
        .dispatch("login", {
          email: formData.email,
          password: formData.password
        })
        .catch(error => {
          if (error) {
            this.setError(error, "Une erreur s'est produite");
          }
        });
    },
    setError(error, text) {
      this.error =
        (error.response && error.response.data && error.response.data.error) ||
        text;
    }
  }
};
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
  margin: 0 auto !important;
  box-sizing: border-box;
  background: #fff !important;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1) !important;
  border-radius: 8px !important;
  border: 1px solid #e7e7e7 !important;
}

.form-group textarea {
  margin: 0;
  padding: 5px 20px;
  height: 54px;
  border-radius: 0;
  color: #0b0c11;
  display: block;
  width: 80%;
  margin: 0 auto !important;
  box-sizing: border-box;
  background: #fff !important;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1) !important;
  border-radius: 8px !important;
  border: 1px solid #e7e7e7 !important;
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
  border-radius: 0.325rem;
  background: #f9423a;
  border: 2px solid #fff;
  color: #fff !important;
  height: 54px;
  line-height: 54px;
}

.button-form:disabled {
  border: 2px solid #fff;
  color: #ccc !important;
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
  margin: 0 auto !important;
  font-style: italic;
}

.password {
  position: relative;
}

.password-visibility {
  position: absolute !important;
  top: 12px;
  right: 0;
}
</style>
