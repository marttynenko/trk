<template>
  <div class="inner">
    <!-- <KeythemesToggler /> -->
    <div class="row">
      <div class="col-12">
        <div class="ui-breadcrumbs">
          <nuxt-link :to="localePath('/')" class="ui-breadcrumbs-link">{{$t('main')}}</nuxt-link>
          <nuxt-link :to="localePath('/news')" class="ui-breadcrumbs-link">{{$t('news')}}</nuxt-link>
          <span class="ui-breadcrumbs-current">{{$t('worldnews')}}</span>
        </div>

        <h1 class="page-title">{{$t('worldnews')}}</h1>
        
      </div>
      <main class="col-layout-content col-md-8">
        <div class="news-list" ref="list" v-if="posts && posts.length">
          <PostCard v-for="card in posts" :key="card.ID" :post="card"/>
        </div>
        <div class="news-list" v-else>{{$t('nonews')}}</div>

        <div class="ui-pgn" v-if="isMoreData">
          <a href="" class="ui-pgn-btn ui-btn"
            @click.prevent="toNextPage"
          >{{$t('morebtn')}}</a>
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
import KeythemesToggler from '~/components/news/KeythemesToggler.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Aside, PostCard, KeythemesToggler
  },

  head() {
    return {
      title: this.$t('news')+" - Телерадиокомпания Гомель"
    }
  },

  async asyncData({store,query}) {
    const page = query.page ? +query.page : 1
    await store.dispatch('worldnews/fetchPage', {page})
  },

  data() {
    return {
      currentPage: 1
    }
  },

  computed: {
    ...mapGetters({
      posts: 'worldnews/getPage',
      isMoreData: 'worldnews/getMoreData'
    })
  },

  methods: {
    ...mapActions({fetchPage: 'worldnews/fetchPage'}),

    toNextPage() {
      this.fetchPage({page: ++this.currentPage})
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
    "news":"Новости",
    "worldnews":"Новости в мире",
    "main":"Главная",
    "morebtn":"Смотреть больше",
    "nonews":"Нет новостей"
  },
  "by": {
    "news":"Навiны",
    "worldnews":"Новости в мире",
    "main": "Галоўная",
    "morebtn":"Глядзець больш",
    "nonews":"Няма навін"
  }
}
</i18n>