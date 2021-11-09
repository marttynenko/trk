<template>
  <div class="page-wrapper">
    <Header />
    <div class="page-middle">
      <div class="inner">
        <Nuxt />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/header/Header.vue'
import Footer from '~/components/footer/Footer.vue'

export default {
  components: {
    Header, Footer
  },
}
</script>


