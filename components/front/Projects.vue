<template>
  <div class="front-projects">
    <div class="inner-wide">

      <div class="front-projects-header flex valign-center align-justify">
        <div class="front-projects-header-title h1">{{$t('title')}}</div>
        <div class="front-projects-header-btn">
          <nuxt-link :to="localePath('/shows')" class="ui-btn">{{$t('btn')}}</nuxt-link>
        </div>
      </div>
      

      <div class="row">
        <div class="col-lg-7">
          <div class="front-projects-main" v-if="cat">
            <div class="row">
              <div class="col-sm-7">
                <div class="front-projects-main-img">
                  <NuxtLink :to="localePath(cat.URL)"><img :src="cat.IMG" :alt="cat.NAME"></NuxtLink>
                </div>
              </div>
              <div class="col-sm-5">
                <div class="front-projects-main-title">{{cat.NAME}}</div>
                <div class="front-projects-main-descr">
                  <p>{{cat.DESCRIPTION}}</p>
                  <NuxtLink :to="localePath(cat.URL)" class="ui-btn">{{$t('videobtn')}}</NuxtLink>
                </div>
              </div>
              
            </div>
          </div><!--.main-->
        </div>

        <div class="col-lg-5" v-if="cats && cats.length">
          <div class="front-projects-items">
            <div class="row">
              <div class="col-us-6"
                v-for="item in cats"
                :key="item.ID"
              >
                <div class="front-projects-item">
                  <NuxtLink :to="localePath(item.URL)" class="front-projects-item-img">
                    <div class="front-projects-item-wrap">
                      <img :src="item.IMG" :alt="item.NAME" loading="lazy">
                    </div>
                  </NuxtLink>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default {
  async fetch() {
    await this.$store.dispatch('shows/fetchFrontCategories')
    // await this.$store.dispatch('shows/fetchFrontCategory')
  },

  computed: {
    ...mapGetters({
      catsData: 'shows/getFrontCategories',
      // cat: 'shows/getFrontCategory'
    }),

    cat() {
      if (!this.catsData.length) return null
      return this.catsData[0]
    },

    cats() {
      if (!this.catsData.length) return null
      return this.catsData.slice(1, Math.min(5, this.catsData.length))
    }
  },

  // mounted() {
  //   console.log(this.cats)
  // }
}
</script>

<style lang="scss">
.front-projects {
  padding-top: 90px;

  &-header {
    margin-bottom: 20px;

    &-title {
      margin-bottom: 10px;
    }
    &-btn {
      margin-bottom: 10px;
    }
  }

  &-main {
    margin-bottom: 40px;
    @include fz(14);

    &-title {
      @include fz(20);
      font-weight: 600;
      margin-bottom: 20px;
      text-transform: uppercase;
    }
    &-descr {
      margin-bottom: 30px;
    }
    &-img {
      a {
        display: block;
        overflow: hidden;
      }
      img {
        transition: transform .5s;
      }
      a:hover {
        img {
          transform: scale(1.05);
        }
      }
    }
  }

  &-items {
    margin-top: -15px;

    [class*="col-"] {
      padding-left: 0;
      padding-right: 0;
    }
  }
  &-item {

    &-img {
      display: block;
      padding: 13px;
      border: 2px solid transparent;
      border-radius: 6px;
      transition: border .2s;

      &:hover {
        border-color: $primary;
      }
    }
    img {
      display: block;
      margin: 0 auto;
    }
    &-wrap {
      position: relative;
      padding-bottom: 55%;
      overflow: hidden;

      img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 100%;
        transition: transform .5s;
      }
    }

    &:hover {
      img {
        transform: translate(-50%,-50%) scale(1.08);
      }
    }
  }

  @media (max-width: 768px) {
    &-main-img {
      margin-bottom: 20px;
    }
  }
}
</style>

<i18n>
{
  "ru": {
    "title": "Программы и проекты",
    "btn": "Смотреть все программы",
    "videobtn": "Смотреть видео"
  },
  "by": {
    "title": "Тэлепректы i перадачы",
    "btn": "Глядзець усе праграмы",
    "videobtn": "Глядзець відэа"
  }
}
</i18n>