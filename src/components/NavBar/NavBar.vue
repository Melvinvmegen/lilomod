<template lang="pug">
  v-app-bar.justify-center.d-flex.align-center(app='' fixed elevate-on-scroll :class="{'white': !$route.path.includes('admin'), 'purple darken-3': $route.path.includes('admin')}")
    .main-header-center.col-lg-6.col-md-9(v-if="this.$vuetify.breakpoint.mdAndUp") 
      v-list-item.nav-item.primary--text(v-for="item in navItems" exact :key="item.id" :to="item.link" v-if="!$route.path.includes('admin')")
        span(v-if="item.title") {{ item.title }}
        Logo(color="defaultlogo" v-else)
      v-list-item.nav-item.primary--text(v-if="auth && !$route.path.includes('admin')" to='/admin') ADMIN
    .main-header-center.col-12.justify-space-between(v-else)
      v-list-item(to='/')
        Logo(color="defaultlogo")
      v-app-bar-nav-icon.black--text(@click.stop="drawer= true")
    .d-flex(v-if="$route.path.includes('admin') && this.$vuetify.breakpoint.mdAndUp")
      v-btn(href='' text='' v-if="!auth" to="/login" dark)
        span.mr-2 Se connecter
      v-btn(href='' text='' v-if="auth" @click="onLogout" dark)
        span.mr-2 Se deconnecter
    v-navigation-drawer(v-model='drawer' absolute='' temporary='' fixed right)
      v-icon.mr-4.mt-1.float-right(@click.stop="drawer = false") mdi-close
      br
      v-list(nav='' dense='')
        v-list-item-group(active-class='deep-purple--text text--accent-4')
          v-list-item(v-for='item in navItems' :key='item.id' :to='item.link' two-line exact v-if="item.title")
            v-list-item-icon.align-self-center
              v-icon {{ item.icon }}
            v-list-item-content
              v-list-item-title {{ item.title }}
          v-list-item(v-if="auth && !$route.path.includes('admin')" to='/admin')
            v-list-item-icon.align-self-center
              v-icon mdi-account-supervisor
            v-list-item-content
              v-list-item-title ADMIN
          v-divider
          br
          v-list-item.d-flex(:class="{'flex-column': $vuetify.breakpoint.smAndDown}")
            h3 Retrouvez moi sur
            .icons 
              v-btn.deep-purple--text(v-for='link in socialLinks' :key='link.id' icon='' :to='link.link')
                v-icon(size='20px' color="#9575CD")
                  | {{ link.icon }}
          .full-width
            v-btn.col-12(href='' text='' v-if="!auth" to="/login")
              span.mr-2 Se connecter
            v-btn.col-12(href='' text='' v-if="auth" @click="onLogout")
              span.mr-2 Se deconnecter

</template>

<script>
import Logo from '../Logo/Logo'

export default {
  props: {
    navItems: Array,
    socialLinks: Array
  },
  components: {
    Logo
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
  color: #6a1b9a !important;
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
  margin: 0 auto
}

.v-toolbar__content {
  flex: 0 0 100%;
  max-width: 100%;
}

.main-header-center .nav-item {
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
  background-color: none;
  opacity: 1;
}

.nav-item .router-link-active {
  background: none;
  opacity: 1;
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

.full-width {
  width: 100%;
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
