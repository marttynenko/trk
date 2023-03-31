<template>
  <div class="inner">
    <KeythemesToggler />
    <div class="row">
      <div class="col-12">
        <div class="ui-breadcrumbs">
          <nuxt-link :to="localePath('/')" class="ui-breadcrumbs-link">{{$t('main')}}</nuxt-link>
          <span class="ui-breadcrumbs-current">{{$t('news')}}</span>
        </div>

        <h1 class="page-title">{{$t('news')}}</h1>
        
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
    let title = this.$t('news')+" - Телерадиокомпания Гомель";
    let descr = 'Новости Гомеля и Гомельской области'
    try {
      if (this.metas.PROPERTIES.TITLE && this.metas.PROPERTIES.TITLE.VALUE && this.metas.PROPERTIES.TITLE.VALUE != '') {
        title = this.metas.PROPERTIES.TITLE.VALUE
      }

      if (this.metas.PROPERTIES.DESCRIPTION && this.metas.PROPERTIES.DESCRIPTION.VALUE && this.metas.PROPERTIES.DESCRIPTION.VALUE != '') {
        descr = this.metas.PROPERTIES.DESCRIPTION.VALUE
      }
    } catch (e) {
      console.log(e)
    }

    return {
      title: title,
      meta: [
        { hid: 'description', name: 'description', content: descr },
      ]
    }
  },

  async asyncData({store,query}) {
    const page = query.page ? +query.page : 1
    await store.dispatch('posts/fetchNews', {page})
    await store.dispatch('meta/fetchTags','Новости')
  },

  data() {
    return {
      currentPage: 1
    }
  },

  computed: {
    ...mapGetters({
      posts: 'posts/allPosts',
      isMoreData: 'posts/getMoreData',
      metas: 'meta/getTag'
    })
  },

  methods: {
    ...mapActions({
      fetchNews: 'posts/fetchNews',
      // fetchTags: 'meta/fetchTags'
    }),

    toNextPage() {
      this.fetchNews({page: ++this.currentPage})
        .then(()=>{
          const offset = this.$refs.list.offsetTop
          window.scrollTo({
            top: offset - 160,
            behavior: "smooth"
          })
          // this.$refs.list.scrollIntoView({behavior: "smooth"})
          this.$router.push({query: { page: this.currentPage}})
        })
    }
  }
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
    "main":"Главная",
    "morebtn":"Смотреть больше",
    "nonews":"Нет новостей"
  },
  "by": {
    "news":"Навiны",
    "main": "Галоўная",
    "morebtn":"Глядзець больш",
    "nonews":"Няма навін"
  }
}
</i18n>