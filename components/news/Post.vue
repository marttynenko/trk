<template>
  <article class="post">
    <header class="post-header"
      v-if="!post.IMG"
    >
      <h1 class="post-title">{{post.NAME}}</h1>
      <div class="post-date-wrp">
        <div class="post-date">{{post.ACTIVE_FROM}}</div>
      </div>
    </header>

    <header class="post-imaged"
      v-else
    >
      <div class="post-imaged-img"><img :src="post.IMG" :alt="post.NAME"></div>
      <div class="post-imaged-content">
        <h1 class="post-title">{{post.NAME}}</h1>
        <div class="post-date-wrp">
          <div class="post-date">{{post.ACTIVE_FROM}}</div>
        </div>
      </div>
    </header>

    <p class="post-top"
      v-if="post.PREVIEW_TEXT.length"
      v-html="post.PREVIEW_TEXT"
    ></p>

    <div class="post-body" 
      v-if="post.DETAIL_TEXT.length"
      v-html="post.DETAIL_TEXT"
    ></div>

    <div class="post-video ui-video"
      v-if="post.VIDEO && post.VIDEO.length"
      :data-video="post.VIDEO"
      @click.prevent="changeSource(post.VIDEO)"
    >
      <img :src="getYoutubePreview(post.VIDEO)" :alt="post.NAME+' видео'" loading="lazy">
    </div>
  </article>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  props: {
    post: Object
  },

  methods: {
    ...mapMutations({changeSource: 'player/changeSource'}),

    getYoutubePreview(videoLink) {
      const chanks = videoLink.split('/')
      const videoID = chanks[chanks.length - 1]
      return `//img.youtube.com/vi/${videoID}/hqdefault.jpg`
    },
  }
}

</script>

<style lang="scss">
.post {
  margin-bottom: 40px;

  &-header {
    margin-bottom: 25px;
  }

  &-date {
    @include fz(15);

    &-wrp {
      text-align: right;
    }
  }

  &-imaged {
    position: relative;
    overflow: hidden;
    margin-bottom: 30px;
    color: #FFF;

    &-img {
      position: relative;

      img {
        display: block;
        width: 100%;
      }

      &:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,.1), rgba(0,0,0,.75) 85%);
      }
    }

    &-content {
      position: absolute;
      bottom: 30px;
      left: 30px;
      right: 30px;
    }
  }

  &-title {
    margin-top: 0;
    margin-bottom: 10px;
    font-weight: 600;
  }

  &-top {
    @include fz(20);
    font-weight: 600;
  }

  &-body {
    margin-bottom: 25px;

    & > :last-child {
      margin-bottom: 0;
    }
  }
}
</style>