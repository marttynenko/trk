<template>
  <div class="static-page">
    <div class="inner">
      <div class="ui-breadcrumbs">
        <nuxt-link :to="localePath('/')" class="ui-breadcrumbs-link">{{$t('main')}}</nuxt-link>
        <nuxt-link :to="localePath('/about')" class="ui-breadcrumbs-link">{{$t('about')}}</nuxt-link>
        <span class="ui-breadcrumbs-current">{{$t('press')}}</span>
      </div>

      <static-menu />

      <div class="row">

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
  </div>
  
</template>

<script>
import Aside from '~/components/Aside.vue'
import StaticMenu from '~/components/StaticMenu.vue'
import PostCard from '~/components/news/PostCard.vue'
import {mapGetters, mapActions} from 'vuex'

export default {
  components: {
    Aside, StaticMenu, PostCard
  },

  head() {
    return {
      title: this.$t('press')+" - Телерадиокомпания Гомель"
    }
  },

  async asyncData({store,query}) {
    const page = query.page ? +query.page : 1
    await store.dispatch('press/fetchNews', {page})
  },

  data() {
    return {
      currentPage: 1
    }
  },

  computed: {
    ...mapGetters({
      posts: 'press/allPosts',
      isMoreData: 'press/getMoreData'
    })
  },

  methods: {
    ...mapActions({fetchNews: 'press/fetchNews'}),

    toNextPage() {
      this.fetchNews({page: ++this.currentPage})
        .then(()=>{
          this.$refs.list.scrollIntoView({behavior: "smooth"})
          this.$router.push({query: { page: this.currentPage}})
        })
    }
  }
}
</script>


<i18n>
{
  "ru": {
    "about": "О компании",
    "main":"Главная",
    "morebtn":"Смотреть больше",
    "press":"Пресса о нас",
    "nonews":"Нет новостей"
  },
  "by": {
    "about": "Аб кампаніі",
    "main": "Галоўная",
    "morebtn":"Глядзець больш",
    "press":"Прэса пра нас",
    "nonews":"Няма навін"
  }
}
</i18n>