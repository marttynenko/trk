<template>
  <div class="inner">
    <div class="row">
      <div class="col-12">
        <div class="ui-breadcrumbs">
          <nuxt-link :to="localePath('/')" class="ui-breadcrumbs-link">{{$t('main')}}</nuxt-link>
          <span class="ui-breadcrumbs-current">Новости</span>
        </div>

        <h1 class="page-title">{{$t('results')}} <span class="page-title-mini" v-if="counters.total">{{counters.total}} результата(ов)</span></h1>

      </div>
      <main class="col-layout-content col-md-8">
        <search-form />

        <div class="news-list" ref="list">
          <PostCard v-for="card in results" :key="card.ID" :post="card"/>
        </div>

        <div class="ui-pgn" v-if="isMoreData">
          <a href="" class="ui-pgn-btn ui-btn"
            @click.prevent="toNextPage"
          >Смотреть больше</a>
        </div>
      </main>

      <div class="col-layout-aside col-md-4">
        <Aside />
      </div>
    </div>
  </div>
</template>

<script>
import Aside from '~/components/Aside.vue'
import PostCard from '~/components/news/PostCard.vue'
import SearchForm from '~/components/SearchPageForm.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Aside, PostCard, SearchForm
  },

  head() {
    return {
      title: "Результаты поиска - Телерадиокомпания Гомель"
    }
  },

  async asyncData({store,params,query}) {
    const req = params.slug
    const page = query.page ? +query.page : 1
    await store.dispatch('search/fetchResults', {query: req, page})
    return {req}
  },

  data() {
    return {
      currentPage: 1
    }
  },

  computed: {
    ...mapGetters({
      results: 'search/getResults',
      isMoreData: 'search/getMoreData',
      counters: 'search/getCounters'
    })
  },

  methods: {
    ...mapActions({fetchResults: 'search/fetchResults'}),

    toNextPage() {
      this.fetchResults({query: this.req, page: ++this.currentPage})
        .then(()=>{
          this.$refs.list.scrollIntoView({behavior: "smooth"})
          this.$router.push({query: { page: this.currentPage}})
        })
    }
  },


}
</script>

<style lang="scss">
.news-list {
  margin-bottom: 60px;
}

</style>

<i18n>
{
  "ru": {
    "results":"Результаты поиска",
    "main":"Главная"
  },
  "by": {
    "results":"Вынікі пошуку",
    "main": "Галоўная"
  }
}
</i18n>