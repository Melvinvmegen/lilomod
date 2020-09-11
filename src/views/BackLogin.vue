<template lang="pug">
  .login-back
    TextHeader(:blabla="blabla")
    LoginForm
</template>

<script>

import LoginForm from "../components/LoginForm/LoginForm"
import TextHeader from "../components/TextHeader/TextHeader"

export default {
  name: "BackLogin",
  components: {
    LoginForm,
    TextHeader
  },
  data () {
    return {
      blabla: {
        title: "Bienvenu sur le backoffice de Lilomod",
        subtitle: "Madame Deshon, veuillez-vous connecter"
      }
    }
  }
};
</script>

<style>
  .login-back {
    max-width: 60%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    height: 100%;
    align-items: center;
    flex-direction: column;
  }
</style>
