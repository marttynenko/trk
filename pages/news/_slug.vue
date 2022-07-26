<template>
  <div class="inner">
    <div class="row">
      <div class="col-12">
        <div class="ui-breadcrumbs">
          <nuxt-link :to="localePath('/')" class="ui-breadcrumbs-link">{{$t('main')}}</nuxt-link>
          <nuxt-link :to="localePath('/news')" class="ui-breadcrumbs-link">{{$t('news')}}</nuxt-link>
          <span class="ui-breadcrumbs-current">{{post.NAME}}</span>

          <a
            href="javascript:void(0)"
            class="ui-btn ui-btn-mini"
            v-clipboard:copy="shortLink"
            v-clipboard:success="onShortCopy"
          >{{shortLinkLabel}}</a>
        </div>
      </div>
      <div class="col-layout-content col-md-8">
        

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

  head() {
    return {
      title: (this.post.META.ELEMENT_META_TITLE || this.post.NAME) + ' | ' + this.$t('sitename'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.META.ELEMENT_META_DESCRIPTION || this.post.DETAIL_TEXT.replace(/<\/?[^>]+>/ig, " ").substring(0,220)
        }, {
          hid: 'keywords',
          name: 'keywords',
          content: (this.post.TAGS && this.post.TAGS != "") ? this.post.TAGS : ''
          // content: this.post.META.ELEMENT_META_KEYWORDS ? this.post.META.ELEMENT_META_KEYWORDS : ''
        }
      ]
    }
  },

  data() {
    return {
      sharingData: {
        url: '',
        title: ''
      },
      isCoping: false
    }
  },

  computed: {
    ...mapGetters({post: 'post/post'}),

    shortLink() {
      if (process.browser) {
        return window.location.origin + (this.$i18n.locale === 'by' ? '/by' : '') + '/n/' + this.post.ID
      }
      return ''
    },

    shortLinkLabel() {
      if (this.isCoping) {
        return this.$t('shortLabel')
      }
      return this.$t('short')
    }
  },

  methods: {
    ...mapActions({
      fetchPost: 'post/fetchPost',
      postToNow: 'readnow/postToNow'
    }),

    //меняем текст кнопки при копировании
    onShortCopy() {
      this.isCoping = true

      setTimeout(()=>{
        this.isCoping = false
      },3000)
    }
  },

  mounted() {
    this.sharingData.url = window.location.href
    this.sharingData.title = this.post.NAME

    setTimeout(() => {
      if (this.sharingData.url === window.location.href) {
        this.postToNow(this.post.ID)
      }
    },5000)
  }
}
</script>


<i18n>
{
  "ru": {
    "news":"Новости",
    "main":"Главная",
    "morebtn":"Смотреть больше",
    "short":"Короткая ссылка",
    "shortLabel":"Скопировано",
    "sitename":"Телерадиокомпания Гомель"
  },
  "by": {
    "news":"Навiны",
    "main": "Галоўная",
    "morebtn":"Глядзець больш",
    "short":"Кароткая спасылка",
    "shortLabel":"Скапіравана",
    "sitename":"Телерадыекампанiя Гомель"
  }
}
</i18n>