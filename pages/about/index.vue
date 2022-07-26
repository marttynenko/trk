<template>
  <div class="static-page">
    <div class="inner">
      <div class="ui-breadcrumbs">
        <nuxt-link :to="localePath('/')" class="ui-breadcrumbs-link">{{$t('main')}}</nuxt-link>
        <span class="ui-breadcrumbs-current">{{$t('about')}}</span>
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
import {mapGetters, mapMutations} from 'vuex'

import lightGallery from 'lightgallery';
// import 'lightgallery/css/lightgallery.css'
// import 'lightgallery/css/lightgallery-bundle.css'
// import 'lightgallery/fonts/lg.woff2'
import Swiper from 'swiper';
import 'swiper/css/swiper.css'

export default {
  components: {
    Aside, StaticMenu
  },

  head() {
    return {
      title: "О компании - Телерадиокомпания Гомель"
    }
  },

  async asyncData({store, params}) {
    await store.dispatch('page/fetchPage', 'about')
  },

  methods: {
    ...mapMutations({changeSource: 'player/changeSource'}),

    initGallery(selector) {
      const style = document.createElement('link')
      style.rel = 'stylesheet'
      style.href = 'https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.5.0/css/lightgallery.min.css'
      document.head.appendChild(style)

      lightGallery(document.querySelector(selector), {
        selector: '.snippet-history-img',
        download: false
      });

    }
  },

  computed: {
    ...mapGetters({page: 'page/page'})
  },

  mounted() {
    // document.querySelectorAll('.snippet-history-img').forEach(el => {
    //   el.addEventListener('click',function (e) {
    //     e.preventDefault()
    //     console.log(this.href)
    //   })
    // })

    if (document.querySelector('.snippet-history-img')) {
      this.initGallery('.snippet-history')
    }

    document.querySelectorAll('.snippet-history-video').forEach(el => {
      const video = el.dataset.video || null
      if (video) {
        el.addEventListener('click',() => this.changeSource(video))
      }
    })

    if (document.querySelector('.snippet-slider')) {
      const carousel = document.querySelector('.snippet-slider')

      const wrp = document.createElement('div');
      wrp.className = 'swiper snippet-slider-wrapper'
      carousel.classList.add('swiper-wrapper')
      carousel.insertAdjacentElement('beforebegin',wrp)
      wrp.appendChild(carousel)
      carousel.insertAdjacentHTML('afterend','<div class="swiper-pagination swiper-dots"></div>');

      document.querySelectorAll('.snippet-slider-item').forEach(el => el.classList.add('swiper-slide'))

      const slider = new Swiper('.snippet-slider-wrapper',{
        loop: false,
        slidesPerView: 1,
        autoHeight: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
      })
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