<template lang="pug">
.flex
 h1 Créer une nouvelle prestation
 form(ref="form")
  span.error-message(v-if="error") {{ error }}
  .form-group(:class="{ invalid: $v.prestationData.name.$error }")
   v-text-field#name.form-control(
    label="Nom",
    type="text",
    v-model.lazy="prestationData.name",
    @blur="$v.prestationData.name.$touch()"
   )
   v-text-field#price.form-control( 
    label="Prix",
    type="text",
    v-model.lazy="prestationData.price",
    @blur="$v.prestationData.price.$touch()"
   )
   v-textarea#description.form-control(
    label="Description",
    type="text",
    auto-grow,
    v-model.lazy="prestationData.description",
    @blur="$v.prestationData.description.$touch()"
   )
  //- v-file-input(
  //-   show-size
  //-   counter
  //-   label="Image"
  //-   accept="image/*"
  //-   @change="uploadImage"
  //- )
  v-file-input(
    show-size
    counter
    label="Logo"
    accept="image/*"
    @change="uploadLogo"
  )
  .d-flex
    .form-button.my-2.mr-2
      v-btn(color='success' :disabled="$v.$invalid" @click.prevent="onSubmit" ref="button")
        | Créer une nouvelle prestation
    .form-button.my-2
      v-btn(color='error' @click.prevent="$router.go(-1)")
        | Annuler
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  name: "ArticleNew",
  data: function() {
    return {
      prestationData: {
        name: "",
        price: "",
        description: "",
        image: null,
        logo: null
      },
      error: ""
    };
  },
  validations: {
    prestationData: {
      name: {
        required
      },
      price: {
        required
      },
      description: {
        required
      },
      // image: {
      //   required
      // },
      logo: {
        required
      }
    }
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("addPrestation", {
          name: this.prestationData.name,
          price: this.prestationData.price,
          description: this.prestationData.description,
          image: this.prestationData.image,
          logo: this.prestationData.logo
        })
        .then(this.$router.push({ name: "Prestations" }))
        .catch(error => {
          if (error) {
            this.setError(error, "Une erreur s'est produite");
          }
        });
    },
    // uploadImage(event) {
    //   this.prestationData.image = event;
    // },
    uploadLogo(event) {
      this.prestationData.logo = event;
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
