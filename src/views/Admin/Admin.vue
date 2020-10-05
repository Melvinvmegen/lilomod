<template lang="pug">
  div#admin
    div#dashboard(v-if="$route.name === 'Admin'")
      h1 Bienvenu sur le dashboard Lilomod
      h3.subtitle-1 Vous trouverez ci-dessous un résumé des dernieres activités.
      br
      v-divider
      br
      br
    router-view

</template>

<script>
export default {

}
</script>

<style>

</style>