<template>
  <div class="page-wrapper">
    <Header />
    <div class="page-middle">

      <div class="inner">
        <div class="row">
          <div class="col-md-9">
            <Nuxt />
          </div>
          <div class="col-md-3">
            <Aside />
          </div>
        </div>
      </div>
      
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/header/Header.vue'
import Footer from '~/components/footer/Footer.vue'
import Aside from '~/components/Aside.vue'

export default {
  name: 'page',

  components: {
    Header, Footer, Aside
  }
}
</script>


