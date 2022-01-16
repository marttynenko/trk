<template>
  <div class="more-news ui-block">
    <div class="h3 more-news-title">Больше новостей:</div>

    <div class="more-news-body">
      <div class="more-news-slider" v-swiper="swiperOptions">
        <div class="swiper-wrapper">
          <div class="swiper-slide"
            v-for="post in posts"
            :key="post.ID">
            <div class="more-news-item">
              <div class="more-news-item-img">
                <NuxtLink :to="post.URL">
                  <img :src="post.IMG" :alt="post.NAME">
                </NuxtLink>
              </div>

              <div class="more-news-item-date">{{post.ACTIVE_FROM}}</div>

              <NuxtLink :to="post.URL" class="more-news-item-title">{{post.NAME}}</NuxtLink>
            </div>
          </div>
        </div>
        <div class="swiper-button-next ui-swiper-arrow"></div>
        <div class="swiper-button-prev ui-swiper-arrow"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import {mapGetters, mapActions} from 'vuex'

export default {
  directives: {
    swiper: directive
  },

  computed: {
    ...mapGetters({posts: 'posts/firstPosts'})
  },

  data () {
    return {
      swiperOptions: {
        loop: false,
        slidesPerView: 1,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          500: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          }
        }
      }
    }
  },

  methods: {
    ...mapActions({fetchNews: 'posts/fetchNews'})
  },

  mounted () {
    if (!this.posts.length) {
      this.fetchNews({})
    }
  }
}
</script>


<style lang="scss">
.more-news {
  &-title {
    margin-bottom: 30px;
  }

  &-item {
    @include fz(14);

    &-img {
      margin-bottom: 15px;

      img {
        display: block;
      }
    }

    &-date {
      color: $font_gray;
      margin-bottom: 20px;
    }

    &-title {
      color: $font;
      font-weight: 600;

      &:hover {
        color: $primary;
      }
    }
  }

  &-slider {
    .swiper-button-prev,
    .swiper-button-next {
      top: 64px;
      margin-top: 0;
    }
  }
}

</style>