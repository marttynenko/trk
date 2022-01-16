<template>
  <div class="static-page">
    <div class="inner">
      <div class="ui-breadcrumbs">
        <nuxt-link to="/" class="ui-breadcrumbs-link">Главная</nuxt-link>
        <nuxt-link to="/about" class="ui-breadcrumbs-link">О компании</nuxt-link>
        <span class="ui-breadcrumbs-current">Контакты</span>
      </div>

      <static-menu />

      <div class="row">

        <main class="col-layout-content col-md-8">
          <h1 class="page-title">Контакты</h1>

          <div class="contacts-map">
            <GMap
              ref="gMap"
              :options="{...mapOptions}"
              :center="{...mapCenter}"
              :zoom="16"
            >
              <GMapMarker
                :position="{...mapCenter}"
              ></GMapMarker>
            </GMap>
          </div>
        </main>

        <div class="col-layout-aside col-md-4">
          <Aside />
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import Aside from '~/components/Aside.vue'
import StaticMenu from '~/components/StaticMenu.vue'

export default {
  components: {
    Aside, StaticMenu
  },

  head() {
    return {
      title: "Контакты - Телерадиокомпания Гомель"
    }
  },

  data () {
    return {
      mapCenter: {
        lat: 52.433001, lng: 31.011505
      },
      mapOptions: {
        fullscreenControl: false,
        scrollwheel: false,
        mapTypeControl: false,
        streetViewControl: false
      },
    }
  },

  // async asyncData({store}) {
  //   await store.dispatch('posts/fetchNews', {})
  // },

  // data() {
  //   return {
  //     currentPage: 1
  //   }
  // },

  // computed: {
  //   ...mapGetters({allPosts: 'posts/allPosts'})
  // },

  // methods: {
  //   ...mapActions({fetchNews: 'posts/fetchNews'}),

  //   toNextPage() {
  //     this.fetchNews({page: ++this.currentPage})
  //   }
  // },
}
</script>