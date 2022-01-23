<template>
  <div class="inner">
    <div class="ui-breadcrumbs">
      <nuxt-link :to="localePath('/')" class="ui-breadcrumbs-link">{{$t('main')}}</nuxt-link>
      <span class="ui-breadcrumbs-current">{{$t('title')}}</span>
    </div>

    <h1 class="page-title">{{$t('title')}} <span v-if="$route.query && $route.query.date" class="page-title-mini">за {{$route.query.date}}</span></h1>

    <div class="row">
      <main class="col-layout-content col-md-8">
        <div v-if="queryDate">
          <div class="news-list" ref="list" v-if="posts && posts.length">
            <PostCard v-for="card in posts" :key="card.ID" :post="card"/>
          </div>
          <div class="news-list" v-else><strong v-if="$route.query && $route.query.date">{{$route.query.date}}</strong> {{$t('nodata')}}</div>

          <div class="ui-pgn" v-if="isMoreData">
            <a href="" class="ui-pgn-btn ui-btn"
              @click.prevent="toNextPage"
            >{{$t('morebtn')}}</a>
          </div>
        </div>
        
        <div v-else>
          <p>{{$t('error')}}</p>
          <nuxt-link :to="localePath('/')" class="ui-btn">{{$t('backbtn')}}</nuxt-link>
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
      title: "Архив новостей - Телерадиокомпания Гомель"
    }
  },

  async asyncData({store,query}) {
    const queryPage = query.page ? +query.page : 1
    let queryDate = query.date ? query.date : null
    await store.dispatch('archieve/fetchPosts', {date: queryDate, page: queryPage})
    return {queryDate}
  },

  data() {
    return {
      currentPage: 1
    }
  },

  computed: {
    ...mapGetters({
      posts: 'archieve/getPosts',
      isMoreData: 'archieve/getMoreData'
    }),

    dateFromQuery() {
      return this.$route.query.date
    }
  },

  methods: {
    ...mapActions({fetchNews: 'archieve/fetchPosts'}),

    toNextPage() {
      this.fetchNews({date: this.queryDate, page: ++this.currentPage})
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
    "title":"Архив новостей",
    "main":"Главная",
    "morebtn":"Смотреть больше",
    "nodata": "не было опубликовано ни одной новости",
    "error": "Ошибка. Не передана дата для выборки в архиве",
    "backbtn": "Вернуться на главную"
  },
  "by": {
    "title":"Архіў навін",
    "main": "Галоўная",
    "morebtn":"Глядзець больш",
    "nodata": "не было апублікавана ні адной навіны",
    "error": "Памылка. Не перададзена дата для выбаркі ў архіве",
    "backbtn": "Вярнуцца на галоўную"
  }
}
</i18n>