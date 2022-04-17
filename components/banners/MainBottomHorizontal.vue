<template>
  <Banner :banner="banner" v-if="banner"/>
</template>

<script>
import {mapGetters} from 'vuex'
import Banner from './Banner.vue'

export default {
  components: {
    Banner
  },

  async fetch() {
    await this.$store.dispatch('banners/fetchMainBottomHorizontal')
  },

  data() {
    return {
      banner: null
    }
  },

  computed: {
    ...mapGetters({banners: 'banners/getMainBottomHorizontal'})
  },

  methods: {
    randomInteger(min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }
  },

  mounted() {
    if (this.banners && this.banners.length) {
      const random = this.randomInteger(0,this.banners.length - 1)
      this.banner = this.banners[random]
    } else {
      this.banner = null
    }
  }
}
</script>