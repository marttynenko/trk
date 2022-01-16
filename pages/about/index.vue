<template>
  <div class="static-page">
    <div class="inner">
      <div class="ui-breadcrumbs">
        <nuxt-link to="/" class="ui-breadcrumbs-link">Главная</nuxt-link>
        <span class="ui-breadcrumbs-current">О компании</span>
      </div>

      <static-menu />

      <div class="row">

        <main class="col-layout-content col-md-8">
          <article class="static-article">
            <header>
              <h1 class="page-title">О нас</h1>
            </header>

            <p>История гомельского телевидения началась в 50-х годах, тогда располагался любительский центр в ДК железнодорожников. Из-за невозможности приема сигнала из Минска, центр принимал сигнал из Киева. 6 ноября 1956 года, была выпущена первая программа. Под руководством талантливого инженера Евгения Керножицкого работали энтузиасты, которые вскоре стали штатными сотрудниками уже профессионального гомельского телевидения.</p>

            <p>Первая программа была новогодней. 31 декабря 1957 года, она и вышла в эфир из любительского телецентра. С этого момента и началась история Телерадиокомпании "Гомель". Из-за отсутствия видеозаписи в то время, все шло в прямом эфире. Чтобы не произошло заминки, все передачи несколько раз репетировались, перед выдачей в эфир.</p>

            <h3>История создания</h3>

            <p><strong>1950</strong></p>
            <p>История гомельского телевидения началась с любительского телецентра, который располагался в ДК железнодорожников. Вначале он принимал программы из Киева, поскольку в 50-х годах прошлого века, когда все начиналось, прием сигнала из Минска технически был невозможен.</p>

            <p><strong>1956</strong></p>
            <p>Свою первую программу любительский телецентр выдал в эфир 6 ноября 1956-го. Под руководством талантливого инженера Евгения Керножицкого работали энтузиасты, которые вскоре стали штатными сотрудниками уже профессионального гомельского телевидения.</p>
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
      title: "О компании - Телерадиокомпания Гомель"
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

<style lang="scss">

</style>