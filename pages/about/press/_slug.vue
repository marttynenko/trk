<template>
  <div class="inner">
    <div class="row">
      <div class="col-layout-content col-md-8">
        <div class="ui-breadcrumbs">
          <nuxt-link :to="localePath('/')" class="ui-breadcrumbs-link">{{$t('main')}}</nuxt-link>
          <nuxt-link :to="localePath('/about')" class="ui-breadcrumbs-link">{{$t('about')}}</nuxt-link>
          <nuxt-link :to="localePath('/about/press')" class="ui-breadcrumbs-link">{{$t('press')}}</nuxt-link>
          <span class="ui-breadcrumbs-current">{{post.NAME}}</span>
        </div>

        <PostSubscribe />
      </div><!--.col-12-->

      <main class="col-layout-content col-md-8">
        <Post :post="post" />
        <Sharing :sharingData="sharingData"/>
        <hr class="ui-hr"/>
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
import {mapActions, mapGetters} from 'vuex'


export default {
  components: {
    Aside,
    Post,
    PostSubscribe,
    Sharing,
  },

  async asyncData({store, params}) {
    await store.dispatch('press/fetchPost', params.slug)
  },

  computed: {
    ...mapGetters({post: 'press/getPost'})
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
    "morebtn":"Смотреть больше",
    "about": "О компании",
    "press":"Пресса о нас"
  },
  "by": {
    "news":"Навiны",
    "main": "Галоўная",
    "morebtn":"Глядзець больш",
    "about": "Аб кампаніі",
    "press":"Прэса пра нас"
  }
}
</i18n>