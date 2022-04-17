<template>
  <div class="static-page">
    <div class="inner">
      <div class="ui-breadcrumbs">
        <nuxt-link :to="localePath('/')" class="ui-breadcrumbs-link">{{$t('main')}}</nuxt-link>
        <nuxt-link :to="localePath('/about')" class="ui-breadcrumbs-link">{{$t('about')}}</nuxt-link>
        <span class="ui-breadcrumbs-current">{{page.NAME}}</span>
      </div>

      <static-menu />

      <div class="row">

        <main class="col-layout-content col-md-8">
          <article class="static-article">
            <header>
              <h1>{{page.NAME}}</h1>
            </header>
            <div class="static-article-body" v-html="page.DETAIL_TEXT"></div>
          </article>

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
import {mapGetters} from 'vuex'

export default {
  components: {
    Aside, StaticMenu
  },

  head() {
    return {
      title: "Контакты - Телерадиокомпания Гомель"
    }
  },

  async asyncData({store, params}) {
    await store.dispatch('page/fetchPage', 'contacts')
  },

  computed: {
    ...mapGetters({page: 'page/page'})
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
  }
}
</script>

<i18n>
{
  "ru": {
    "main":"Главная",
    "about": "О компании"
  },
  "by": {
    "main": "Галоўная",
    "about": "Аб кампаніі"
  }
}
</i18n>