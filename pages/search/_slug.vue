<template>
  <div class="inner">
    <div class="row">
      <div class="col-12">
        <div class="ui-breadcrumbs">
          <nuxt-link to="/" class="ui-breadcrumbs-link">Главная</nuxt-link>
          <span class="ui-breadcrumbs-current">Новости</span>
        </div>

        <h1 class="page-title">Результаты поиска</h1>
        
      </div>
      <main class="col-layout-content col-md-8">
        <div class="news-list">
          <PostCard v-for="card in posts" :key="card.ID" :post="card"/>
        </div>

        <div class="ui-pgn">
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
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Aside, PostCard
  },

  head() {
    return {
      title: "Новости - ТРК"
    }
  },

  async asyncData({store,params}) {
    await store.dispatch('search/fetchResults', {query: params.slug})
  },

  data() {
    return {
      currentPage: 1,
      posts: []
    }
  },

  computed: {
    ...mapGetters({results: 'search/getResults'})
  },

  mounted() {
    console.log(this.results)
  }

  // methods: {
  //   ...mapActions({fetchNews: 'posts/fetchNews'}),

  //   toNextPage() {
  //     this.fetchNews({page: ++this.currentPage})
  //   }
  // },
}
</script>

<style lang="scss">
.news-list {
  margin-bottom: 60px;
}

</style>