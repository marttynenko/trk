<template>
  <div class="main-news flex" v-if="post && post.CODE">
    <div class="main-news-body">
      <div class="main-news-label">{{$t('main')}}</div>
      <div class="main-news-title">
        <NuxtLink :to="localePath('/news/'+post.CODE)">{{post.NAME}}</NuxtLink>
      </div>
      <div class="main-news-preview"
        v-if="post.PREVIEW_TEXT && post.PREVIEW_TEXT.length"
      >{{post.PREVIEW_TEXT}}</div>
      <div class="main-news-btn">
        <NuxtLink :to="localePath('/news/'+post.CODE)" class="ui-btn">{{$t('readbtn')}}</NuxtLink>
      </div>
    </div>

    <div class="main-news-img" @mouseenter.once="plHover">
      <div class="main-news-img-link" v-if="isPlayer">
        <vue-plyr ref="plyr" :options="videoOptions">
          <div data-plyr-provider="youtube" :data-plyr-embed-id="post.PROPERTIES.VIDEO_LINK.VALUE" :rel="0"></div>
        </vue-plyr>
      </div>
      
      <NuxtLink :to="localePath('/news/'+post.CODE)" class="main-news-img-link" v-else>
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

  data() {
    return {
      isPlayer: false,
      videoOptions: {
        ratio: '16:9',
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen'],
        clickToPlay: true,
        autoplay: true,
        youtube: {
          autoplay: 1,
          rel: 0,
        }

      },
    }
  },

  computed: {
    ...mapGetters({post: 'mainnews/getPost'})
  },

  methods: {
    plHover() {
      this.isPlayer = true
      // this.$refs.plyr.player.play()
      // if (document.querySelector('.plyr__controls')) {
      //   document.querySelector('.plyr__controls').classList.add('visible')
      // }
    }
  }
}
</script>

<style lang="scss">
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

    .plyr {
      z-index: 2;
      border-radius: 4px;
    }
    // .plyr__controls {
    //   opacity: 0;

    //   &.visible {
    //     opacity: 1;
    //   }
    // }

    &-link {
      display: block;
      position: relative;
      padding: 30px;
      border-radius: 10px;
      border: 1px solid $primary;

      &:hover {
        img {
          transform: scale(1.05);
        }
      }

      img {
        display: block;
        border-radius: 6px;
        position: relative;
        z-index: 2;
        transition: transform .5s;
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

<i18n>
{
  "ru": {
    "main":"Главное",
    "readbtn": "Читать"
  },
  "by": {
    "main": "Галоўнае",
    "readbtn": "Чытаць"
  }
}
</i18n>