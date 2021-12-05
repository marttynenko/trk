<template>
  <div class="main-news flex" v-if="post">
    <div class="main-news-body">
      <div class="main-news-label">Главное</div>
      <div class="main-news-title">
        <NuxtLink :to="'/news/'+post.CODE">{{post.NAME}}</NuxtLink>
      </div>
      <div class="main-news-preview"
        v-if="post.PREVIEW_TEXT && post.PREVIEW_TEXT.length"
      >{{post.PREVIEW_TEXT}}</div>
      <div class="main-news-btn">
        <NuxtLink :to="'/news/'+post.CODE" class="ui-btn">Читать</NuxtLink>
      </div>
    </div>

    <div class="main-news-img">
      <NuxtLink :to="'/news/'+post.CODE" class="main-news-img-link">
        <img :src="post.IMG" :alt="post.NAME" loading="lazy">
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'MainNews',

  async fetch() {
    await this.$store.dispatch('mainnews/fetchPost')
  },

  computed: {
    ...mapGetters({post: 'mainnews/getPost'})
  },

  // mounted() {
  //   console.log(this.post)
  // }
}
</script>

<style lang="scss" scoped>
.main-news {
  padding: 50px 65px;

  &-body {
    flex: 0 0 55%;
    max-width: 55%;
    padding-right: 30px;
  }
  &-img {
    flex: 0 0 45%;
    max-width: 45%;

    &-link {
      display: block;
      position: relative;
      padding: 30px;
      border-radius: 10px;
      border: 1px solid $primary;

      img {
        display: block;
        border-radius: 6px;
        position: relative;
        z-index: 2;
      }

      &:before {
        content: "";
        position: absolute;
        left: -2px;
        top: -2px;
        height: 45%;
        width: 50%;
        z-index: 1;
        background: #282828;
      }
    }
  }

  &-label {
    margin-bottom: 18px;
    @include fz(16);
    color: $primary;
    font-weight: 600;
  }

  &-title {
    @include fz(40);
    line-height: 1.2;
    font-weight: 600;
    margin-bottom: 30px;

    a {
      color: #FFF;

      &:hover {
        color: $primary;
      }
    }
  }

  &-preview {
    @include fz(15);
    margin-bottom: 30px;
  }

  @media (max-width: 1440px) {
    padding-left: 35px;
    padding-right: 35px;

    &-title {
      @include fz(30);
    }

    &-img {
      &-link {
        padding: 20px;
      }
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    position: relative;
    padding-top: 75px;

    &-img,
    &-body {
      flex: 0 0 100%;
      max-width: 100%;
    }
    &-body {
      padding-top: 18px;
      padding-right: 0;
      order: 1;
    }
    &-label {
      position: absolute;
      left: 35px;
      top: 40px;
    }
  }

  @media (max-width: 576px) {
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>