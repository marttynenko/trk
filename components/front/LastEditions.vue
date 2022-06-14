<template>
  <div class="ui-block front-editions" v-if="posts && posts.length">

    <div class="front-editions-header">
      {{$t('also')}} <a href="https://www.youtube.com/channel/UCmeQS-euSReIz2l_HlaaQ0Q" rel="nofollow" target="_blank" class="front-editions-header-on"><icon-youtube class="front-editions-header-icon" /> YouTube</a>
      <a href="https://www.youtube.com/channel/UCmeQS-euSReIz2l_HlaaQ0Q" rel="nofollow" target="_blank" class="front-editions-btn ui-btn">{{$t('btn')}}</a>
    </div>

    <div class="front-editions-body">
      <VueSlickCarousel 
        v-bind="slickOptions"
      >
        <div class="front-editions-slide"
          v-for="post in posts"
          :key="post.ID"
        >
          <div class="front-editions-item">
            <div class="front-editions-item-img">
              <img :src="getYoutubePreview(post.VIDEO)" >
              <div class="front-editions-item-play ui-play" @click.prevent="changeSource(post.VIDEO)"></div>
            </div>

            <div class="front-editions-item-date">{{post.ACTIVE_FROM}}</div>
          </div>
        </div>
      </VueSlickCarousel>
      <div class="front-editions-archieve">
        <!-- <NuxtLink to="/news/" class="ui-btn ui-btn-big">{{$t('archieve')}}</NuxtLink> -->
        <FrontArchieve />
      </div>
    </div>

  </div>
</template>

<script>
import iconYoutube from '@/assets/images/icons/youtube-header.svg'
import FrontArchieve from '~/components/news/FrontArchieve.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

import {mapGetters, mapMutations} from 'vuex'

export default {
  components: {
    iconYoutube,
    VueSlickCarousel,
    FrontArchieve
  },

  async fetch() {
    await this.$store.dispatch('lasteditions/fetchPosts')
  },

  data () {
    return {
      slickOptions: {
        infinite: false,
        lazyLoad: 'ondemand',
      }
    }
  },

  computed: {
    ...mapGetters({posts: 'lasteditions/getPosts'})
  },

  methods: {
    ...mapMutations({changeSource: 'player/changeSource'}),

    getYoutubePreview(videoLink) {
      const chanks = videoLink.split('/')
      const videoID = chanks[chanks.length - 1]
      return `//img.youtube.com/vi/${videoID}/maxresdefault.jpg`
    },
  }
}
</script>

<style lang="scss">
.front-editions {
  &-header {
    position: relative;
    display: inline-block;
    margin-right: 10px;
    padding: 10px 15px;
    border: 1px solid #EB9139;
    border-bottom: 0;
    border-radius: 4px 4px 0px 0px;

    &:after {
      content: "";
      position: absolute;
      right: -1px;
      bottom: 0;
      width: 1px;
      height: 15px;
      background: $bg;
      z-index: 1;
    }

    &-icon {
      display: inline-block;
      vertical-align: middle;
      position: relative;
      top: -1px;
    }

    &-on {
      white-space: nowrap;
      @include fz(16);
      font-weight: 600;
      color: #C4302B;

      &:hover {
        color: lighten(#C4302B, 10%);
      }
    }
  }

  &-item {
    position: relative;

    &:hover {
      .front-editions-item-img img {
        transform: translate(-50%,-50%) scale(1.05);
      }
    }

    &-img {
      position: relative;
      // height: 480px;
      border-radius: 4px;
      overflow: hidden;

      @media (min-width: 768px) {
        height: 480px;

        img {
          position: absolute;
          left: 50%;
          top: 50%;
          transition: transform .5s;
          transform: translate(-50%,-50%);
          height: 100%;
          min-width: 100%;
          max-width: none;
          display: block;
        }
      }

      img {
        display: block;
      }

      &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        border-radius: 4px;
        background: rgba(#000,.35);
      }
    }

    &-date {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 50%;
      z-index: 1;
      min-width: 175px;
      max-width: 100%;
      background: #FDF7F1;
      border-radius: 0px 4px 0px 4px;
      padding: 0px 60px 0px 15px;
      height: 45px;
      line-height: 45px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      @include fz(14);
    }

    &-play {
      position: absolute;
      left: 50%;
      top: 50%;
      z-index: 1;
      transform: translate(-50%,-50%);
      width: 40px;
      height: 40px;
      background: url(@/assets/images/icons/ui-play.svg?inline) center no-repeat;
      background-size: contain;
      cursor: pointer;
    }
  }

  .slick-slide {
    line-height: 0;
  }

  &-body {
    position: relative;
  }

  &-archieve {
    position: absolute;
    z-index: 1;
    bottom: 0;
    right: 0;
  }

  .slick-arrow {
    position: absolute;
    z-index: 2;
    bottom: 11px;
    width: 24px;
    height: 24px;
    border: 0;
    padding: 0;
    margin: 0;
    font-size: 0;
    border-radius: 12px;
    background-color: #C2C1C0;
    cursor: pointer;

    &:hover {
      background-color: $primary;
    }
  }

  .slick-prev {
    right: 50%;
    margin-right: 44px;
  }
  .slick-next {
    right: 50%;
    margin-right: 10px;
  }

  @media (max-width: 576px) {
    &-archieve {
      position: static;
      padding-top: 15px;

      .ui-btn {
        height: 33px;
        line-height: 33px;
        @include fz(14);
        padding: 0px 20px;
      }
    }

    &-item {
      &-date {
        width: 80%;
      }
    }

    .slick-prev {
      right: 20%;
      margin-right: 44px;
    }
    .slick-next {
      right: 20%;
      margin-right: 10px;
    }
  }
}
</style>


<i18n>
{
  "ru": {
    "title":"Последние выпуски новостей",
    "btn": "Подписаться",
    "archieve": "Архив новостей",
    "also": "Смотрите также на"
  },
  "by": {
    "title":"Апошнія выпускі навін",
    "btn": "Падпісацца",
    "archieve": "Архіў навін",
    "also": "Глядзіце таксама на"
  }
}
</i18n>