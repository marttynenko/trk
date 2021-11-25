<template>
  <div class="news-card">
    <div class="news-card-img">
      <a :href="news.url">
        <img :src="news.img" :alt="news.title">
        <!-- <nuxt-img :src="news.img" :alt="news.title"/> -->
      </a>
    </div>

    <div class="news-card-body">
      <div class="news-card-title"><a :href="news.url">{{news.title}}</a></div>
      <div class="news-card-descr">{{news.descr}}</div>
      <div class="news-card-date">{{news.date}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.news-card {
  margin-bottom: 30px;
  display: flex;

  &-img {
    padding-right: 20px;
    flex: 0 0 35%;
    max-width: 35%;

    img {
      display: block;
    }
  }

  &-body {
    position: relative;
    padding-bottom: 40px;
  }

  &-title {
    @include fz(20);
    font-weight: 600;
    margin-bottom: 10px;

    a {
      color: $font;

      &:hover {
        color: $primary;
      }
    }
  }

  &-date {
    position: absolute;
    left: 0;
    bottom: 0;
    @include fz(14);
    color: $font_gray;
  }
}

</style>