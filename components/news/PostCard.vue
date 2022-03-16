<template>
  <div class="post-card" :data-id="post.ID">
    <div class="post-card-img">
      <NuxtLink :to="localePath(post.URL)">
        <img :src="post.IMG" :alt="post.NAME" loading="lazy">
        <!-- <nuxt-img :src="post.IMG" preset="postCard" :alt="post.title"/> -->
      </NuxtLink>
    </div>

    <div class="post-card-body">
      <div class="post-card-title"><NuxtLink :to="localePath(post.URL)">{{post.NAME}}</NuxtLink></div>
      <div class="post-card-descr"
        v-if="post.DETAIL_TEXT && post.DETAIL_TEXT.length"
      >{{post.DETAIL_TEXT}}</div>
      <div class="post-card-descr"
        v-else-if="post.SEARCH_RES && post.SEARCH_RES.length"
        v-html="post.SEARCH_RES"
      ></div>
      <div class="post-card-date" v-if="post.ACTIVE_FROM">{{post.ACTIVE_FROM}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },

  methods: {
    generateURL(code) {
      return '/news/'+code
    }
  },

  filters: {
    strippedContent: function(string) {
      return string.replace(/<\/?[^>]+>/ig, " "); 
    }
  } 
}
</script>

<style lang="scss">
.post-card {
  margin-bottom: 30px;
  display: flex;

  &-img {
    padding-right: 20px;
    flex: 0 0 35%;
    max-width: 310px;

    a {
      display: block;
      overflow: hidden;

      &:hover {
        img {
          transform: scale(1.08);
        }
      }
    }

    img {
      display: block;
      transition: transform .5s;
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

  @media (max-width: 576px) {
    &-img {
      padding-right: 15px;
    }
    &-title {
      @include fz(18);
      margin-bottom: 8px;
    }
    &-body {
      padding-bottom: 0;
    }
    &-date {
      position: static;
    }
    &-descr {
      @include fz(14);
    }
  }
}

</style>