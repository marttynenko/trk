<template>
  <div class="page-wrapper">
    <Header />
    <div class="page-middle">
      <MainTopHorizontal />
      <Nuxt />
    </div>
    <Footer />
    <VI/>
    <Panel />
    <Popups />
    <keep-alive>
      <Player />
    </keep-alive>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

import Header from '~/components/header/Header.vue'
import Footer from '~/components/footer/Footer.vue'
import Panel from '~/components/SidePanel.vue'
import Player from '~/components/Player.vue'
import Popups from '~/components/popups/Popups.vue'
import MainTopHorizontal from '~/components/banners/MainTopHorizontal.vue'
import VI from '~/components/VI.vue'

export default {
  components: {
    Header, Footer, Player, Panel, MainTopHorizontal, VI
  },
}
</script>


