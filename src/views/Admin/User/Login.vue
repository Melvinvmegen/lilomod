<template lang="pug">
  .login-back
    TextHeader(:blabla="blabla" :side="true")
    LoginForm
</template>

<script>
import LoginForm from "../../../components/LoginForm/LoginForm";
import TextHeader from "../../../components/TextHeader/TextHeader";

export default {
  name: "Login",
  components: {
    LoginForm,
    TextHeader
  },
  data() {
    return {
      blabla: {
        title: "Page de connexion au backoffice de Lilomod",
        subtitle: "Pour y acceder, veuillez-vous connecter"
      }
    };
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
