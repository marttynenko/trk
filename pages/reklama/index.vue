<template>
  <div class="rek-page">
    <div class="rek-page-banner"><img src="/images/reklama-banner.png" alt="Реклама и услуги" loading="lazy"></div>

    <div class="inner">
      
      <div class="ui-breadcrumbs">
        <nuxt-link to="/" class="ui-breadcrumbs-link">Главная</nuxt-link>
        <span class="ui-breadcrumbs-current">Реклама и услуги</span>
      </div>

      <h1 class="page-title">Реклама и услуги</h1>

      <div class="rek-categories" v-if="cats && cats.length">
        <div class="row">
          <div class="col-md-4 col-us-6"
            v-for="cat in cats"
            :key="cat.ID"
          >
            <nuxt-link :to="cat.SRC" class="rek-category">
              <img :src="cat.IMG" :alt="cat.NAME" class="rek-category-img" loading="lazy">
              <div class="rek-category-title">{{cat.NAME}}</div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  head: {
    title: 'Реклама и услуги - Телерадиокомпания Гомель'
  },

  data() {
    return {
      cats: [
        {NAME: 'Видеопроизводство', IMG: '//via.placeholder.com/427x263', SRC: '#', ID: '01'},
        {NAME: 'Аудиопроизводство', IMG: '//via.placeholder.com/427x263/000/FFF', SRC: '#', ID: '02'}
      ]
    }
  },
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