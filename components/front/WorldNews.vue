<template>
  <div class="ui-block world-news">
    <div class="ui-block-header">
      <h4 class="ui-block-header-title">В мире</h4>
      <div class="ui-block-header-btn">
        <NuxtLink to="/news/" class="ui-btn">Новое</NuxtLink>
      </div>
    </div>

    <div class="world-news-body">
      <VueSlickCarousel 
        class="world-news-slick"
        :infinite="false"
      >

        <div class="world-news-slide"
          v-for="post in posts"
          :key="post.ID"
        >
          <div class="world-news-item">
            <NuxtLink :to="post.URL" class="world-news-item-img">
              <img :src="post.IMG" :alt="post.NAME">
            </NuxtLink>
            <div class="world-news-item-content">
              <NuxtLink :to="post.URL" class="world-news-item-title">{{post.NAME}}</NuxtLink>
              <div class="world-news-item-date">{{post.ACTIVE_FROM}}</div>
            </div>
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
  name: 'WorldNews',

  components: {
    VueSlickCarousel
  },

  data() {
    return {

    }
  },

  async fetch() {
    await this.$store.dispatch('worldnews/fetchPosts')
  },

  computed: {
    ...mapGetters({posts: 'worldnews/getPosts'})
  }

}
</script>

<style lang="scss">
.world-news {
  &-item {
    position: relative;
    color: #FFF;

    &-img {
      position: relative;
      display: block;
      height: 550px;

      img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        min-width: 100%;
        min-height: 100%;
        max-width: none;
        object-fit: cover;
        object-position: center;
      }
      &:after {
        content: "";
        position: absolute;
        top: 35%;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(255,255,255,0), rgba(0,0,0,0.7));
        z-index: 1;
      }
    }

    &-content {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 0px 25px 25px;
      z-index: 2;
    }

    &-title {
      display: block;
      margin-bottom: 8px;
      font-weight: 600;
      color: #FFF;

      &:hover {
        color: $primary;
      }
    }

    &-date {
      @include fz(14);
    }
  }

  &-slick {
    .slick-arrow {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto 0;
      z-index: 9;
      background-color: rgba(#CCC,.1);
    }
    .slick-prev {
      left: 15px;
    }
    .slick-next {
      right: 15px;
    }
  }
}
</style>