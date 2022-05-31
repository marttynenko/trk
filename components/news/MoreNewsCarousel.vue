<template>
  <div class="more-news ui-block">
    <div class="h3 more-news-title">{{$t('title')}}:</div>

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
        slidesPerView: 'auto',
        spaceBetween: 20,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // breakpoints: {
        //   500: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
        //   768: {
        //     slidesPerView: 3,
        //     spaceBetween: 20,
        //   }
        // }
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

      a {
        display: block;
        position: relative;
        overflow: hidden;
        padding-bottom: 56.25%;
        background: #000;

        &:hover {
          img {
            transform: translate(-50%,-50%) scale(1.08);
          }
        }
      }

      img {
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        min-width: 100%;
        transition: transform .5s;
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

  .swiper-slide {
    width: 290px;
  }

  &-slider {
    .swiper-button-prev,
    .swiper-button-next {
      top: 88px;
      margin-top: 0;
    }
  }

  @media (max-width: 576px) {
    .swiper-slide {
      width: 225px;
    }
    &-slider {
      .swiper-button-prev,
      .swiper-button-next {
        top: 66px;
      }
    }
  }
}
</style>


<i18n>
{
  "ru": {
    "title":"Больше новостей"
  },
  "by": {
    "title":"Больш навін"
  }
}
</i18n>