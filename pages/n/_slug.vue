<template>
  <div class="inner">
    <div class="error-page" v-if="!post">
      <div class="error-page-code">404</div>
      <div class="error-page-msg">{{$t('msg')}}</div>
      <nuxt-link :to="localePath('/')" class="error-page-btn">{{$t('btn')}} →</nuxt-link>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  async asyncData({store, params}) {
    await store.dispatch('post/fetchPostByID', params.slug)
  },

  computed: {
    ...mapGetters({post: 'post/postInitial'})
  },

  created() {
    if (this.post && this.post.CODE) {
      this.$router.push(this.localePath({path: '/news/' + this.post.CODE}))
    }
  }
}
</script>

<i18n>
{
  "ru": {
    "msg":"К сожалению, запрашиваемая вами страница не найдена или допущена ошибка в URL-адресе",
    "btn":"На главную"
  },
  "by": {
    "msg":"Нажаль, запытаная вамі старонка не знойдзена ці дапушчана памылка ў URL-адрасе",
    "btn":"На галоўную"
  }
}
</i18n>