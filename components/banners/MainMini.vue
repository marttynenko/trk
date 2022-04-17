<template>
  <div class="banners-list">
    <Banner
      v-for="item in toRender"
      :key="item.ID"
      :banner="item"
    />
  </div>
  
</template>

<script>
import {mapGetters} from 'vuex'
import Banner from './Banner.vue'

export default {
  components: {
    Banner
  },

  async fetch() {
    await this.$store.dispatch('banners/fetchMainMini')
  },

  data() {
    return {
      banner: null,
      toRender: []
    }
  },

  computed: {
    ...mapGetters({banners: 'banners/getMainMini'})
  },

  methods: {
    randomInteger(min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }
  },

  mounted() {

    if (this.banners && this.banners.length) {
      
      // this.banner = this.banners[random]
      const count = Math.min(3, this.banners.length)
      for (let i = 0; i < count; i++) {
        const random = this.randomInteger(0,this.banners.length - 1)
        this.toRender.push(this.banners[random])
      }
    }
  }
}
</script>

<style lang="scss">
.banners-list {
  .banner {
    margin-bottom: 20px;
  }
}
</style>