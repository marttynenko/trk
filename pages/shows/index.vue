<template>
  <div class="inner">
    
    <div class="ui-breadcrumbs">
      <nuxt-link to="/" class="ui-breadcrumbs-link">Главная</nuxt-link>
      <span class="ui-breadcrumbs-current">Новости</span>
    </div>

    <h1 class="page-title">Спецпроекты</h1>
        
    <div class="shows-list">
      <div class="row">
        <div class="col-md-8">
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
        </div>
      </div>
    </div>
      
      
  </div>
</template>

<script>

export default {

  head() {
    return {
      title: "Спецпроекты - ТРК"
    }
  },

  // async asyncData({store}) {
  //   await store.dispatch('posts/fetchNews')
  // },

  data() {
    return {
      currentPage: 1
    }
  },

  // computed: {
  //   ...mapGetters({allPosts: 'posts/allPosts'})
  // },

  methods: {
    // ...mapActions({fetchNews: 'posts/fetchNews'}),

    // toNextPage() {
    //   this.fetchNews(++this.currentPage)
    // }
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
    margin-bottom: 20px;
    line-height: 0;
    opacity: 0.6;
    transition: opacity;

    &:hover {
      opacity: 1;
    }

    img {
      display: block;
      margin: 0 auto;
    }
  }
}

</style>