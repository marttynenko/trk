<template>
  <div class="page-wrapper">
    <Header />
    <div class="page-middle">
      <Nuxt />
    </div>
    <Footer />
    <Panel />
    <Popups />
    <keep-alive>
      <Player />
    </keep-alive>
  </div>
</template>

<script>
import Header from '~/components/header/Header.vue'
import Footer from '~/components/footer/Footer.vue'
import Panel from '~/components/SidePanel.vue'
import Player from '~/components/Player.vue'
import Popups from '~/components/popups/Popups.vue'

export default {
  components: {
    Header, Footer, Player, Panel
  },
}
</script>


