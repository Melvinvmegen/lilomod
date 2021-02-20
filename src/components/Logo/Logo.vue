<template lang='pug'>
  .logo_bottom.d-flex(data-cursor-hover data-cursor-mix-blend-mode="difference" v-if='bottom')
    img(:src="bottomLogo" alt="" class="logo_bottom")
  .logo.d-flex(data-cursor-hover data-cursor-mix-blend-mode="difference" v-else)
    img(:src="logo" alt="" class="logo")
</template>

<script>
import logo from '../../assets/logo.png'
import bottomLogo from '../../assets/logo_bottom.png'

export default {
  props: {
    color: {
      type: String,
      default: null
    },
    bottom: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      logo,
      bottomLogo
    }
  }
}
</script>

<style scoped>
  .logo {
    width: 150px;
    height: auto;
    object-fit: contain;
  }

  .logo img {
    max-width: 150px;
  }

  .spacer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo_bottom {
    height: 100px;
  }

  @media (max-width: 768px) {
    .logo img {
      max-width: 120px;
    }
    .logo_bottom {
      margin-bottom: 10px;
    }
  }


  @media only screen and (max-width: 500px) {
    .logo {
      max-width: 100px;
    }
  }
</style>
