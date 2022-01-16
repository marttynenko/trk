<template>
  <div class="actual-carousel"
    v-if="posts && posts.length"
  >
    <div class="inner-wide">
      <div class="actual-carousel-label">Актуальное</div>
      <VueSlickCarousel
        class="actual-carousel-slick"
        :dots="true"
        :arrows="false"
        :infinite="false"
        :lazyLoad="'ondemand'"
        :adaptiveHeight="true"
      >
        <div class="actual-carousel-slide"
          v-for="post in posts"
          :key="post.ID"
        >
          <div class="actual-carousel-item">
            <div class="actual-carousel-item-title">
              <NuxtLink :to="'/news/'+post.CODE" class="actual-carousel-item-link">{{post.NAME}}</NuxtLink>
            </div>
            <div class="actual-carousel-item-date">{{post.ACTIVE_FROM}}</div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import {mapGetters} from 'vuex'

export default {
  name: "ActualCarousel",

  components: {
    VueSlickCarousel
  },

  async fetch() {
    await this.$store.dispatch('actualcarousel/fetchPosts')
  },

  computed: {
    ...mapGetters({posts:'actualcarousel/getPosts'})
  }
}
</script>

<style lang="scss">
.actual-carousel {
  padding-top: 75px;
  padding-bottom: 75px;
  background: #000 url('/images/bgs/actual-carousel.jpg') center no-repeat;
  background-size: cover;
  color: #FFF;

  &-label {
    color: $primary;
    margin-bottom: 40px;
    font-weight: 600;
    @include fz(16);
  }

  &-item {
    margin-bottom: 80px;

    &-title {
      @include fz(40);
      line-height: 1.2;
      font-weight: 600;
      margin-bottom: 20px;
    }
    &-link {
      color: #FFF;

      &:hover {
        color: $primary;
      }
    }

    &-date {
      @include fz(14);
    }
  }

  .slick-dots {
    @media (min-width: 992px) {
      li {
        width: 92px;
        margin: 0px 20px 5px;
      }
    }
  }

  @media (max-width: 1140px) {
    &-label {
      margin-bottom: 30px;
    }
    &-item {
      margin-bottom: 50px;
    }
  }

  @media (max-width: 576px) {
    padding-top: 35px;
    padding-bottom: 35px;

    &-label {
      margin-bottom: 15px;
    }

    &-item {
      margin-bottom: 25px;

      &-title {
        @include fz(32);
      }
    }
  }
}
</style>