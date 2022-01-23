<template>
  <div class="inner">
    <div class="row">
      <div class="col-layout-content col-md-8">
        <div class="ui-breadcrumbs">
          <nuxt-link :to="localePath('/')" class="ui-breadcrumbs-link">{{$t('main')}}</nuxt-link>
          <nuxt-link :to="localePath('/news')" class="ui-breadcrumbs-link">{{$t('news')}}</nuxt-link>
          <span class="ui-breadcrumbs-current">{{post.NAME}}</span>
        </div>

        <PostSubscribe />
      </div><!--.col-12-->

      <main class="col-layout-content col-md-8">
        <Post :post="post" />
        <Sharing :sharingData="sharingData"/>
        <hr class="ui-hr"/>
        <MoreNewsCarousel />
      </main>

      <div class="col-layout-aside col-md-4">
        <Aside />
      </div>
    </div>
  </div>
</template>

<script>
import Aside from '~/components/Aside.vue'
import Post from '~/components/news/Post.vue'
import PostSubscribe from '~/components/PostSubscribe.vue'
import Sharing from '~/components/Sharing.vue'
import MoreNewsCarousel from '~/components/news/MoreNewsCarousel.vue'
import {mapActions, mapGetters} from 'vuex'


export default {
  components: {
    Aside,
    Post,
    PostSubscribe,
    Sharing,
    MoreNewsCarousel
  },

  async asyncData({store, params}) {
    await store.dispatch('post/fetchPost', params.slug)
  },

  computed: {
    ...mapGetters({post: 'post/post'})
  },

  methods: {
    ...mapActions({fetchPost: 'post/fetchPost'})
  },

  data() {
    return {
      sharingData: {
        url: '',
        title: ''
      }
    }
  },

  mounted() {
    this.sharingData.url = window.location.href
    this.sharingData.title = this.post.NAME
  }
}
</script>


<i18n>
{
  "ru": {
    "news":"Новости",
    "main":"Главная",
    "morebtn":"Смотреть больше"
  },
  "by": {
    "news":"Навiны",
    "main": "Галоўная",
    "morebtn":"Глядзець больш"
  }
}
</i18n>