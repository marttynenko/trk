<template>
  <div class="static-page">
    <div class="inner">
      <div class="ui-breadcrumbs">
        <nuxt-link :to="localePath('/')" class="ui-breadcrumbs-link">Главная</nuxt-link>
        <nuxt-link :to="localePath('/about')" class="ui-breadcrumbs-link">О компании</nuxt-link>
        <span class="ui-breadcrumbs-current">О Телевидении</span>
      </div>

      <static-menu />

      <div class="row">

        <main class="col-layout-content col-md-8">
          <article class="static-article">
            <header>
              <h1 class="page-title">О Телевидении</h1>
            </header>

            <p>Извините, раздел еще не заполнен</p>
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

export default {
  components: {
    Aside, StaticMenu
  },

  head() {
    return {
      title: "ТВ - Телерадиокомпания Гомель"
    }
  },

  data () {
    return {
    }
  }
}
</script>