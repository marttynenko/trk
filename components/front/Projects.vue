<template>
  <div class="front-projects">
    <div class="inner-wide">
      <div class="h1 front-projects-header">{{$t('title')}}</div>

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
                  <NuxtLink :to="localePath(cat.URL)" class="ui-btn">Смотреть видео</NuxtLink>
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
    await this.$store.dispatch('shows/fetchFrontCategory')
  },

  computed: {
    ...mapGetters({
      cats: 'shows/getFrontCategories',
      cat: 'shows/getFrontCategory'
    })
  },

  // mounted() {
  //   console.log(this.cats)
  // }
}
</script>

<style lang="scss">
.front-projects {
  padding-top: 90px;

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
    "title": "Программы и проекты"
  },
  "by": {
    "title": "Тэлепректы i перадачы"
  }
}
</i18n>