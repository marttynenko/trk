<template>
  <div class="news-carousel" v-if="posts.length">
    <VueSlickCarousel 
      v-bind="slickOptions"
      class="news-carousel-slick"
    >
      <div class="news-carousel-slide"
        v-for="post in posts"
        :key="post.ID"
      >
        <div class="news-carousel-item">
          <div class="news-carousel-item-title">
            <NuxtLink :to="'/news/'+post.CODE" class="news-carousel-item-link">{{post.NAME}}</NuxtLink>
          </div>
          <div class="news-carousel-item-date">{{post.ACTIVE_FROM}}</div>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import {mapGetters} from 'vuex'

export default {
  name: 'NewsCarousel',

  components: {
    VueSlickCarousel
  },

  async fetch() {
    await this.$store.dispatch('newscarousel/fetchPosts')
  },

  data() {
    return {
      slickOptions: {
        slidesToShow: 4,
        infinite: false,
        lazyLoad: 'ondemand',
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 840,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 533,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      }
    }
  },

  computed: {
    ...mapGetters({posts: 'newscarousel/getPosts'})
  }
}
</script>

<style lang="scss">
.news-carousel {
  background: $bg;
  padding: 50px 65px;
  color: $font;

  &-item {
    position: relative;
    padding-left: 20px;
    padding-right: 30px;
    min-height: 92px;
    @include fz(14);

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 3px;
      height: 92px;
      background: $primary;
    }

    &-title {
      @include fz(16);
      margin-bottom: 8px;
      font-weight: 600;
    }

    &-link {
      color: $font;

      &:hover {
        color: $primary;
      }
    }
  }

  &-slick {
    margin-bottom: 45px;

    .slick-arrow {
      position: absolute;
      z-index: 9;
      bottom: -45px;
    }

    .slick-prev {
      right: 60px;
    }
    .slick-next {
      right: 0;
    }
  }


  @media (max-width: 1440px) {
    padding-left: 35px;
    padding-right: 35px;
  }

  @media (max-width: 576px) {
    padding: 35px 15px;
  }
}
</style>