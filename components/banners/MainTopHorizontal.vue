<template>
  <Banner :banner="banner" v-if="banner" :classes="'banner-top'"/>
</template>

<script>
import {mapGetters} from 'vuex'
import Banner from './Banner.vue'

export default {
  components: {
    Banner
  },

  async fetch() {
    await this.$store.dispatch('banners/fetchMainTopHorizontal')
  },

  data() {
    return {
      banner: null
    }
  },

  computed: {
    ...mapGetters({banners: 'banners/getMainTopHorizontal'})
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
    
    // console.log(this.banners, this.banner)
  }
}
</script>

<style scoped>
.banner-top {
  margin-top: -30px;
  margin-bottom: 30px;
}
</style>