<template>
  <div class="static-page">
    <div class="inner">
      <div class="ui-breadcrumbs">
        <nuxt-link :to="localePath('/')" class="ui-breadcrumbs-link">{{$t('main')}}</nuxt-link>
        <nuxt-link :to="localePath('/reklama')" class="ui-breadcrumbs-link">{{$t('adm')}}</nuxt-link>
        <span class="ui-breadcrumbs-current">{{page.NAME}}</span>
      </div>

      <div class="row">

        <main class="col-layout-content col-md-8">
          <article class="static-article">
            <header>
              <h1 class="page-title">{{page.NAME}}</h1>
            </header>

            <div class="static-article-body" v-html="page.DETAIL_TEXT"></div>
          </article>
          
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
import {mapGetters, mapMutations} from 'vuex'

export default {
  components: {
    Aside
  },

  head() {
    return {
      title: this.page.NAME+" - Телерадиокомпания Гомель"
    }
  },

  async asyncData({store,params}) {
    await store.dispatch('ads/fetchPage',params.slug)
  },

  computed: {
    ...mapGetters({page: 'ads/getPage'})
  },

  methods: {
    ...mapMutations({changeSource: 'player/changeSource'})
  },

  mounted() {
    document.querySelectorAll('.snippet-video-img').forEach(el => {
      const video = el.dataset.video || null
      if (video) {
        el.addEventListener('click',() => this.changeSource(video))
      }
    })
  }
}
</script>

<i18n>
{
  "ru": {
    "main":"Главная",
    "adm": "Реклама и услуги"
  },
  "by": {
    "main": "Галоўная",
    "adm": "Рэклама і паслугі"
  }
}
</i18n>