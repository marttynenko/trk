<template>
  <div class="rek-page">
    <div class="rek-page-banner"><img src="/images/reklama-banner.png" alt="Реклама и услуги" loading="lazy"></div>

    <div class="inner">
      
      <div class="ui-breadcrumbs">
        <nuxt-link :to="localePath('/')" class="ui-breadcrumbs-link">{{$t('main')}}</nuxt-link>
        <span class="ui-breadcrumbs-current">{{$t('adm')}}</span>
      </div>

      <h1 class="page-title">{{$t('adm')}}</h1>

      <div class="rek-categories" v-if="cats && cats.length">
        <div class="row">
          <div class="col-md-4 col-us-6"
            v-for="cat in cats"
            :key="cat.ID"
          >
            <nuxt-link :to="cat.URL" class="rek-category">
              <img :src="cat.IMG" :alt="cat.NAME" class="rek-category-img" loading="lazy">
              <div class="rek-category-title">{{cat.NAME}}</div>
            </nuxt-link>
          </div>
        </div>
      </div>

      <div v-else>{{$t('nodata')}}</div>
    </div>
    
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  head() {
    return {
      title: this.$t('adm')+" - Телерадиокомпания Гомель"
    }
  },

  async asyncData({store}) {
    await store.dispatch('ads/fetchCategories')
  },

  computed: {
    ...mapGetters({cats: 'ads/getCategories'})
  }
}
</script>

<style lang="scss">
.rek {
  &-page-banner {
    margin: -30px auto 30px;
    max-width: 1850px;

    img {
      display: block;
      margin: 0 auto;
      width: 100%;
    }
  }

  &-categories {
    margin-bottom: 60px;
  }

  &-category {
    display: block;
    position: relative;
    overflow: hidden;
    margin-bottom: 30px;

    &-img {
      display: block;
      line-height: 0;
      transition: transform .5s;
    }

    &:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      background: linear-gradient(180deg, rgba(255,255,255,0) 30%, rgba(0,0,0,0.7) 90%);
    }

    &-title {
      position: absolute;
      left: 30px;
      bottom: 25px;
      right: 20px;
      z-index: 1;
      @include fz(24);
      font-weight: 600;
      color: #FFF;
    }

    &:hover {
      .rek-category-img {
        transform: scale(1.1);
      }
    }
  }
}
</style>


<i18n>
{
  "ru": {
    "main":"Главная",
    "adm": "Реклама и услуги",
    "nodata": "Раздел не заполнен"
  },
  "by": {
    "main": "Галоўная",
    "adm": "Рэклама і паслугі",
    "nodata": "Раздзел не запоўнены"
  }
}
</i18n>