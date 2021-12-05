<template>
  <div class="ui-block last-editions"
    v-if="posts && posts.length"
  >
    <div class="ui-block-title">Последние выпуски новостей</div>

    <div class="last-editions-header">
      Смотрите также на <span class="last-editions-header-on"><icon-youtube class="last-editions-header-icon" /> YouTube</span>
    </div>

    <div class="last-editions-body">
      <VueSlickCarousel v-bind="slickOptions">
        <div class="last-editions-slide"
          v-for="post in posts"
          :key="post.ID"
        >
          <div class="last-editions-item">
            <div class="last-editions-item-img ui-video"
              @click.prevent="changeSource(post.VIDEO)"
            >
              <img :src="getYoutubePreview(post.VIDEO)" >
              <div class="last-editions-item-play ui-play"></div>
            </div>

            <div class="last-editions-item-date">{{post.ACTIVE_FROM}}</div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>

  </div>
</template>

<script>
import iconYoutube from '@/assets/images/icons/youtube-header.svg'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import {mapGetters, mapMutations} from 'vuex'

export default {
  components: {
    iconYoutube, VueSlickCarousel
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
      return `//img.youtube.com/vi/${videoID}/mqdefault.jpg`
    }
  }
}
</script>

<style lang="scss">
.last-editions {
  &-header {
    position: relative;
    margin-right: 10px;
    padding: 5px 10px;
    border: 1px solid $primary;
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
    }
  }

  &-item {
    position: relative;

    &-img {
      position: relative;

      img {
        display: block;
        border-radius: 4px;
        width: 360px;
      }

      // &:after {
      //   content: "";
      //   position: absolute;
      //   left: 0;
      //   top: 0;
      //   right: 0;
      //   bottom: 0;
      //   border-radius: 4px;
      //   background: rgba(#000,.35);
      // }
    }

    &-date {
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 1;
      min-width: 175px;
      max-width: 100%;
      background: #FDF7F1;
      border-radius: 0px 4px 0px 4px;
      padding: 3px 30px 3px 10px;
      @include fz(13);
    }

    &-play {
      position: absolute;
      left: 50%;
      top: 50%;
      z-index: 1;
      transform: translate(-50%,-50%);
      width: 20px;
      height: 20px;
      background: url(@/assets/images/icons/play.svg?inline) center no-repeat;
      background-size: contain;
      cursor: pointer;
    }
  }

  .slick-arrow {
    position: absolute;
    z-index: 2;
    bottom: 13px;
    width: 10px;
    height: 10px;
    border: 0;
    padding: 0;
    margin: 0;
    font-size: 0;
    border-radius: 5px;
    background-color: #C2C1C0;
    cursor: pointer;

    &:hover {
      background-color: $primary;
    }
  }

  .slick-prev {
    left: 144px;
  }
  .slick-next {
    left: 158px;
  }

}
</style>