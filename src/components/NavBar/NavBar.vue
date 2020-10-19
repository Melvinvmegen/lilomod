<template lang="pug">
  v-app-bar.indigo.lighten-1.white--text(app='' fixed elevate-on-scroll)
    .d-flex.align-center.main-header-left
      router-link(:to="navItems ? {name: 'Homepage'} : {name: 'Admin'}")
        v-img.shrink.mr-2(alt='Vuetify Logo' to="admin" contain='' src='https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png' transition='scale-transition' width='40')
          v-img.shrink.mt-1.hidden-sm-and-down(alt='Vuetify Name' contain='' min-width='100' src='https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png' width='100')
    .main-header-center.col-lg-6(v-if="this.$vuetify.breakpoint.mdAndUp") 
      v-list-item.nav-item(v-for="item in navItems" dark exact :key="item.name" :to="item.link" v-if="!$route.path.includes('admin')")
        | {{ item.title }}
    .main-header-center(v-else)
      v-app-bar-nav-icon.white--text(@click.stop="drawer= true")
    .d-flex(v-if="$route.path.includes('admin')")
      v-btn(href='' text='' v-if="!auth" to="/login" dark)
        span.mr-2 Se connecter
      v-btn(href='' text='' v-if="auth" @click="onLogout" dark)
        span.mr-2 Se deconnecter
    v-navigation-drawer(v-model='drawer' absolute='' temporary='' fixed right)
      v-icon.float-right(@click.stop="drawer = false") mdi-close
      br
      v-list(nav='' dense='')
        v-list-item-group(active-class='deep-purple--text text--accent-4')
          v-list-item(v-for='item in navItems' :key='item.title' :to='item.link' two-line exact)
            v-list-item-icon.align-self-center
              v-icon {{ item.icon }}
            v-list-item-content
              v-list-item-title {{ item.title }}
          v-divider
          br
          v-list-item.d-flex(:class="{'flex-column': $vuetify.breakpoint.smAndDown}")
            h3 Retrouvez moi sur
            .icons 
              v-btn.deep-purple--text(v-for='link in socialLinks' :key='link.id' icon='' :to='link.link')
                v-icon(size='20px' color="#9575CD")
                  | {{ link.icon }}


</template>

<script>
export default {
  props: {
    navItems: Array,
    socialLinks: Array
  },
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    }
  },
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style>
.v-toolbar__content {
  justify-content: space-between;
}

.v-overlay__scrim {
  height: 100vh !important;
}

.v-navigation-drawer {
  height: 100vh !important;
  width: 60vw !important;
}

.v-navigation-drawer__content {
  margin: 30px;
}

aside .v-navigation-drawer__content {
  margin: 0;
}

.nav-item a {
  color: white !important;
}

.main-header-left {
  width: 10%;
  margin-left: 10px;
  margin-top: 5px;
  max-height: 100%;
}

.main-header-center {
  display: flex;
  align-items: center;
  height: 100%;
  width: 45%;
}

.main-header-center .nav-item {
  padding: 0 20px;
  font-size: 15px;
  font-weight: 500;
  width: 100%;
  justify-content: center;
  display: flex;
  height: 100%;
  align-items: center;
  border-radius: 4%;
}

.nav-item:hover {
  background-color: #6876C5;
}

.nav-item .router-link-active {
  background: #6876C5;
}

.router-link-active :after {
  position: absolute;
  content: "";
  bottom: -6px;
  left: calc(0.7em * 1.2);
  right: calc(0.7em * 1.2);
  height: 4px;
  background: #f9423a;
  transition: transform 0.8s cubic-bezier(1, 0, 0.37, 1) 0.2s,
    right 0.2s cubic-bezier(0.04, 0.48, 0, 1) 0.6s,
    left 0.4s cubic-bezier(0.04, 0.48, 0, 1) 0.6s;
}

.router-link-active .line {
  position: absolute;
  background: #f9423a;
  bottom: -6px;
}

.router-link-active .line.-bottom {
  height: 3px;
  left: -3px;
  right: -3px;
  transform: scale3d(0, 1, 1);
}

.router-link-active .line.-bottom {
  bottom: -3px;
  transform-origin: right;
}

.router-link-active :hover:after,
.router-link-active :active:after {
  transform: scale3d(0, 1, 1);
  right: -3px;
  left: -3px;
  transform-origin: right;
  transition: transform 0.2s cubic-bezier(1, 0, 0.65, 1.01) 0.17s,
    right 0.2s cubic-bezier(1, 0, 0.65, 1.01), left 0s 0.3s;
}

.router-link-active :hover .line.-bottom,
.router-link-active :active .line.-bottom {
  transition: transform 0.5s cubic-bezier(0, 0.53, 0.29, 1) 0.56s;
  transform-origin: left;
}

@media (max-width: 960px) {
  .main-header-center {
    justify-content: flex-end;
    margin-right: 20px;
  }
}
@media only screen and (max-width: 600px) {
  .v-navigation-drawer {
    width: 70vw !important;
  }
}

@media only screen and (max-width: 600px) {
  .v-navigation-drawer__content {
    margin: 0;
  }
}
</style>
