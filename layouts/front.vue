<template>
  <div class="page-wrapper">
    <Header />
    <div class="page-middle">
      <Nuxt />
    </div>
    <Footer />
    <keep-alive>
      <Player />
    </keep-alive>
  </div>
</template>

<script>
import Header from '~/components/header/Header.vue'
import Footer from '~/components/footer/Footer.vue'
import Player from '~/components/Player.vue'

export default {
  components: {
    Header, Footer, Player
  },
}
</script>


