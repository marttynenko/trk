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
          <NuxtLink :to="localePath(post.URL)">
            <img :src="post.IMG" :alt="post.NAME" loading="lazy">
          </NuxtLink>
        </div>

        <div class="last-news-item-body">
          <div class="last-news-item-title">
            <NuxtLink :to="localePath(post.URL)" class="last-news-item-link">{{post.NAME}}</NuxtLink>
          </div>

          <!-- <div class="last-news-item-date">{{post.ACTIVE_FROM}}</div> -->
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
  margin-bottom: 12px;
  padding-bottom: 10px;
  border-bottom: 1px solid #dfdbd7;

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: 0;
  }

  &-img {
    flex: 0 0 80px;
    max-width: 80px;
    margin-right: 15px;

    a {
      position: relative;
      display: block;
      overflow: hidden;
      padding-bottom: 56.25%;
      border-radius: 2px;

      &:hover {
        img {
          transform: translate(-50%, -50%) scale(1.08);
        }
      }
    }

    img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      display: block;
      transition: transform .5s;
    }
  }
  &-body {
    position: relative;
    // padding-bottom: 25px;
  }
  &-title {
    font-weight: 600;
    @include fz(16);
    margin-top: -5px;
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
    right: 0;
    bottom: 0;
    color: $font;
    font-weight: 500;
    background: rgba(#FFF,.75);
    @include fz(11);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 0px 5px;
    line-height: 1.2;
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