<template>
  <div class="podcasts-page">
    <podcast-banner />
  
    <div class="inner">
      
      <div class="ui-breadcrumbs">
        <nuxt-link to="/" class="ui-breadcrumbs-link">Главная</nuxt-link>
        <span class="ui-breadcrumbs-current">Подкасты</span>
      </div>

      <h1 class="page-title">Подкасты</h1>

      <div class="podcasts-list">
        <div class="row">

          <div class="col-lg-3 col-sm-4 col-6"
            v-for="podcast in podcasts"
            :key="podcast.ID"
          >
            <podcast-card :podcast="podcast"/>
          </div>

        </div>
      </div>

      <div class="ui-pgn">
        <span class="ui-pgn-btn ui-btn">Смотреть больше</span>
      </div>

      <div class="podcasts-news">
        <h3 class="page-title">Новости</h3>
        <div class="podcast-news-list">
          <PostCard
            v-for="card in allPosts"
            :key="card.ID"
            :post="card"
          />
        </div><!--.list-->

        <div class="ui-pgn">
          <span class="ui-pgn-btn ui-btn"
            @click.prevent="toNextNewsPage"
          >Смотреть больше</span>
        </div>
      </div>
        
    </div>
  </div>
  
</template>

<script>
import PodcastBanner from '~/components/podcasts/PodcastBanner.vue'
import PodcastCard from '~/components/podcasts/PodcastCard.vue'
import PostCard from '~/components/news/PostCard.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  head: {
    title: 'Подкасты - Телерадиокомпания Гомель'
  },

  components: {
    PodcastBanner,
    PodcastCard,
    PostCard
  },

  data() {
    return {
      currentNewsPage: 1,
      podcasts: [
        {NAME: 'Как работает наш мозг', IMG: '//via.placeholder.com/315x315', SRC: '#', ID: '01', THEME: 'Психология на дожде'},
        {NAME: 'Умный подкаст о глупой музыке', IMG: '//via.placeholder.com/315x315/000/FFF', SRC: '#', ID: '02', THEME: 'Научи меня плохому'}
      ]
    }
  },

  computed: {
    ...mapGetters({
      allPosts: 'posts/allPosts'
    })
  },

  methods: {
    ...mapActions({
      fetchNews: 'posts/fetchNews'
    }),

    toNextNewsPage() {
      this.fetchNews({page: ++this.currentNewsPage, limit: 5})
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