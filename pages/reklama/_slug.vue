<template>
  <div class="static-page">
    <div class="inner">
      <div class="ui-breadcrumbs">
        <nuxt-link :to="localePath('/')" class="ui-breadcrumbs-link">Главная</nuxt-link>
        <nuxt-link :to="localePath('/reklama')" class="ui-breadcrumbs-link">Реклама</nuxt-link>
        <span class="ui-breadcrumbs-current">Страница услуги</span>
      </div>

      <div class="row">

        <main class="col-layout-content col-md-8">
          <article class="static-article">
            <header>
              <h1 class="page-title">Страница услуги</h1>
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

export default {
  components: {
    Aside
  },

  head() {
    return {
      title: "О радио - Телерадиокомпания Гомель"
    }
  },

  data () {
    return {
    }
  }
}
</script>