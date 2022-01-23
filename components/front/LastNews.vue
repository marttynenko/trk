<template>
  <div class="ui-block last-news">
    <div class="ui-block-header">
      <h4 class="ui-block-header-title">{{$t('title')}}</h4>
      <div class="ui-block-header-btn">
        <NuxtLink :to="localePath('/news')" class="ui-btn">{{$t('btn')}}</NuxtLink>
      </div>
    </div>

    <div class="last-news-list ui-scroller">
      <div class="last-news-item"
        v-for="post in posts"
        :key="post.ID"
      >
        <div class="last-news-item-img">
          <NuxtLink :to="localePath(post.URL)"><img :src="post.IMG" :alt="post.NAME"></NuxtLink>
        </div>

        <div class="last-news-item-body">
          <div class="last-news-item-title">
            <NuxtLink :to="localePath(post.URL)" class="last-news-item-link">{{post.NAME}}</NuxtLink>
          </div>

          <div class="last-news-item-date">{{post.ACTIVE_FROM}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'LastNews',

  async fetch() {
    await this.$store.dispatch('lastnews/fetchPosts')
  },

  computed: {
    ...mapGetters({posts: 'lastnews/getPosts'})
  }
}
</script>

<style lang="scss">
.last-news-list {
  max-height: 550px;
}
.last-news-item {
  display: flex;
  margin-bottom: 10px;

  &-img {
    flex: 0 0 166px;
    max-width: 166px;
    max-width: 35%;
    padding-right: 10px;

    img {
      display: block;
    }
  }
  &-body {
    position: relative;
    padding-bottom: 25px;
  }
  &-title {
    font-weight: 600;
    @include fz(16);
  }
  &-link {
    color: $font;

    &:hover {
      color: $primary;
    }
  }
  &-date {
    position: absolute;
    left: 0;
    bottom: 0;
    color: $font_gray;
    @include fz(14);
  }
}
</style>

<i18n>
{
  "ru": {
    "title":"Последние новости",
    "btn": "Читать все"
  },
  "by": {
    "title":"Апошнія навіны",
    "btn": "Чытаць усё"
  }
}
</i18n>