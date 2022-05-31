<template>
  <div class="inner">
    
    <div class="ui-breadcrumbs">
      <nuxt-link to="/" class="ui-breadcrumbs-link">{{$t('main')}}</nuxt-link>
      <span class="ui-breadcrumbs-current">{{$t('specials')}}</span>
    </div>

    <h1 class="page-title">{{$t('specials')}}</h1>
        
    <div class="shows-list" ref="list">
      <div class="row">
        <!-- <div class="col-md-8">
          <a href="#" class="shows-item">
            <img src="/images/shows/shw-1.png" alt="alt">
          </a>
        </div>

        <div class="col-md-4">
          <a href="#" class="shows-item">
            <img src="/images/shows/shw-2.png" alt="alt">
          </a>
          <a href="#" class="shows-item">
            <img src="/images/shows/shw-3.png" alt="alt">
          </a>
        </div>

        <div class="col-md-4">
          <a href="#" class="shows-item">
            <img src="/images/shows/shw-4.png" alt="alt">
          </a>
        </div>

        <div class="col-md-8">
          <a href="#" class="shows-item">
            <img src="/images/shows/shw-5.png" alt="alt">
          </a>
        </div> -->

        <div class="col-md-4 col-xs-6"
          v-for="item in categories"
          :key="item.ID"
        >
          <NuxtLink :to="localePath(item.URL)" class="shows-item">
            <img class="shows-item-img" :src="item.IMG" :alt="item.NAME" loading="lazy">
            <div class="shows-item-name">{{item.NAME}}</div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="ui-pgn" v-if="isMoreData">
      <a href="#" class="ui-pgn-btn ui-btn"
        @click.prevent="toNextPage"
      >{{$t('morebtn')}}</a>
    </div>
      
      
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {

  head() {
    return {
      title: "Спецпроекты - ТРК"
    }
  },

  async asyncData({store,query}) {
    const page = query.page ? +query.page : 1
    // console.log(page)
    await store.dispatch('shows/fetchCategories',{page})
  },

  data() {
    return {
      currentPage: 1
    }
  },

  computed: {
    ...mapGetters({
      categories: 'shows/getCategories',
      isMoreData: 'shows/getCategoriesMoreData'
    })
  },

  methods: {
    ...mapActions({fetchCategories: 'shows/fetchCategories'}),

    toNextPage() {
      this.fetchCategories({page: ++this.currentPage})
        .then(()=>{
          // this.$refs.list.scrollIntoView({behavior: "smooth"})
          const offset = this.$refs.list.offsetTop
          window.scrollTo({
            top: offset - 160,
            behavior: "smooth"
          })
          this.$router.push({query: { page: this.currentPage}})
          // history.pushState({'page': this.currentPage}, '', window.location.href)
        })
    }
  },
}
</script>

<style lang="scss">
.shows {
  &-list {
    margin-bottom: 50px;

    .row {
      margin-left: -10px;
      margin-right: -10px;
    }
    [class*="col-"] {
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  &-item {
    display: block;
    position: relative;
    overflow: hidden;
    background: #444;
    padding-bottom: 61.5%;
    margin-bottom: 20px;
    line-height: 0;

    &-img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      width: 100%;
      opacity: 0.6;
      transition: opacity .2s, transform .2s;
    }
    &-name {
      position: absolute;
      left: 0px;
      right: 0px;
      bottom: 0px;
      padding: 0px 20px 20px;
      transform: translate(0,100%);
      transition: transform .2s;
      color: #FFF;
      @include fz(20);
      font-weight: 600;
      line-height: $lh;
      z-index: 1;

      &:before {
        content: "";
        position: absolute;
        z-index: -1;
        left: 0;
        right: 0;
        bottom: 0;
        top: -20px;
        background: linear-gradient(180deg,rgba(255,255,255,0),#000);
      }
    }

    &:hover {
      .shows-item-img {
        opacity: 1;
        transform: translate(-50%,-50%) scale(1.03);
      }
      .shows-item-name {
        transform: translate(0,0);
      }
    }

    img {
      display: block;
      margin: 0 auto;
    }
  }
}
</style>

<i18n>
{
  "ru": {
    "main":"Главная",
    "specials": "Спецпроекты",
    "morebtn":"Смотреть больше"
  },
  "by": {
    "main": "Галоўная",
    "specials": "Спецпраекты",
    "morebtn":"Глядзець больш"
  }
}
</i18n>