<template>
  <div class="inner">

    <KeythemesToggler />

    <div class="ui-breadcrumbs">
      <nuxt-link :to="localePath('/')" class="ui-breadcrumbs-link">{{$t('main')}}</nuxt-link>
      <nuxt-link :to="localePath('/news/keythemes')" class="ui-breadcrumbs-link">{{$t('keythemes')}}</nuxt-link>
    </div>

    <h1 class="page-title" v-if="currentTheme"><span class="page-title-gray">Тема: </span>{{currentTheme.NAME}}</h1>

    <div class="row">

      <main class="col-layout-content col-md-8">
        <div class="news-list" ref="newslist">
          <PostCard v-for="card in posts" :key="card.ID" :post="card"/>
        </div>

        <div class="ui-pgn" v-if="moreData">
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
import KeythemesToggler from '~/components/news/KeythemesToggler.vue'
import {mapActions, mapGetters} from 'vuex'


export default {
  components: {
    Aside, PostCard, KeythemesToggler
  },

  async asyncData({store, params}) {
    const theme = params.slug
    // await store.dispatch('keythemes/fetchPosts', {theme: theme, page: 1})
    await store.dispatch('keythemes/fetchTheme', theme)
    await store.dispatch('keythemes/fetchPosts', {theme})
    return {theme}
  },

  data() {
    return {
      currentPage: 1
    }
  },

  computed: {
    ...mapGetters({
      posts: 'keythemes/getPosts',
      currentTheme: 'keythemes/getCurrentTheme',
      moreData: 'keythemes/getMoreData'
    })
  },

  methods: {
    ...mapActions({fetchPosts: 'keythemes/fetchPosts'}),

    toNextPage() {
      this.fetchPosts({theme: this.theme, page: ++this.currentPage})
        .then(()=>{
          this.$refs.newslist.scrollIntoView({behavior: "smooth"})
        })
    }
  },

  mounted() {
    // console.log(this.currentTheme)
  }
}
</script>

<style lang="scss">
.news-list {
  margin-bottom: 50px;
}
</style>

<i18n>
{
  "ru": {
    "keythemes":"Ключевые темы",
    "main":"Главная"
  },
  "by": {
    "keythemes":"Ключавыя тэмы",
    "main": "Галоўная"
  }
}
</i18n>