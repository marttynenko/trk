<template>
  <div class="static-page">
    <div class="inner">
      <div class="ui-breadcrumbs">
        <nuxt-link :to="localePath('/')" class="ui-breadcrumbs-link">{{$t('main')}}</nuxt-link>
        <span class="ui-breadcrumbs-current">{{page.NAME}}</span>
      </div>

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
import {mapGetters} from 'vuex'

export default {
  components: {
    Aside, StaticMenu
  },

  head() {
    return {
      title: "Пользовательское соглашение - Телерадиокомпания Гомель"
    }
  },

  async asyncData({store, params}) {
    await store.dispatch('page/fetchPage', 'terms-of-use')
  },

  computed: {
    ...mapGetters({page: 'page/page'})
  },
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