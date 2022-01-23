<template>
  <div class="podcasts-page">
    <podcast-banner v-if="banner" :banner="banner" />
  
    <div class="inner">
      
      <div class="ui-breadcrumbs">
        <nuxt-link :to="localePath('/')" class="ui-breadcrumbs-link">{{$t('main')}}</nuxt-link>
        <span class="ui-breadcrumbs-current">{{$t('podcastTitle')}}</span>
      </div>

      <h1 class="page-title">{{$t('podcastTitle')}}</h1>

      <div class="podcasts-list" ref="list">
        <div class="row" v-if="podcasts && podcasts.length">

          <div class="col-lg-3 col-sm-4 col-us-6"
            v-for="podcast in podcasts"
            :key="podcast.ID"
          >
            <podcast-card :podcast="podcast"/>
          </div>

        </div>
        <div class="podcasts-no-items" v-else>
          {{$t('noitems')}}
        </div>
      </div>


      <div class="ui-pgn" v-if="isMoreData">
        <span class="ui-pgn-btn ui-btn" @click.prevent="toNextPage">{{$t('btn')}}</span>
      </div>

      <div class="podcasts-news">
        <h3 class="page-title">{{$t('newsTitle')}}</h3>
        <div class="podcast-news-list">
          <PostCard
            v-for="card in allPosts"
            :key="card.ID"
            :post="card"
          />
        </div><!--.list-->

        <div class="ui-pgn">
          <nuxt-link :to="localePath('/news')" class="ui-pgn-btn ui-btn"
          >{{$t('btn')}}</nuxt-link>
        </div>
      </div>
        
    </div>
  </div>
  
</template>

<script>
// import PodcastBanner from '~/components/podcasts/PodcastBanner.vue'
import PodcastCard from '~/components/podcasts/PodcastCard.vue'
import PostCard from '~/components/news/PostCard.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  head: {
    title: 'Подкасты - Телерадиокомпания Гомель'
  },

  components: {
    PodcastBanner: () => import('~/components/podcasts/PodcastBanner.vue'),
    PodcastCard,
    PostCard
  },

  async asyncData({store,query}) {
    const page = query.page ? +query.page : 1
    await store.dispatch('podcasts/fetchPage',page)
    await store.dispatch('podcasts/fetchBanner')
  },

  data() {
    return {
      currentNewsPage: 1,
    }
  },

  computed: {
    ...mapGetters({
      allPosts: 'posts/allPosts',
      podcasts: 'podcasts/getPage',
      isMoreData: 'podcasts/getPagesMoreData',
      banner: 'podcasts/getBanner'
    })
  },

  methods: {
    ...mapActions({
      fetchNews: 'posts/fetchNews',
      fetchPodcasts: 'podcasts/fetchPage'
    }),

    toNextPage() {
      this.fetchPodcasts({page: ++this.currentPage})
        .then(()=>{
          this.$refs.list.scrollIntoView({behavior: "smooth"})
          this.$router.push({query: { page: this.currentPage}})
        })
    }
  },

  async mounted() {
    if (!this.allPosts.length) {
      await this.fetchNews({page: 1, limit: 5})
    }
  }
}
</script>


<style lang="scss">
.podcasts-list {
  margin-bottom: 60px;
}
.podcasts-news {
  max-width: 890px;
  margin: 100px auto 60px;

  &-list {
    margin-bottom: 60px;
  }
}
</style>


<i18n>
{
  "ru": {
    "podcastTitle":"Подкасты",
    "btn": "Смотреть больше",
    "main":"Главная",
    "newsTitle":"Новости",
    "noitems":"Нет подкастов"
  },
  "by": {
    "podcastTitle":"Падкасты",
    "btn": "Глядзець больш",
    "main":"Галоўная",
    "newsTitle":"Навіны",
    "noitems":"Няма падкастаў"
  }
}
</i18n>