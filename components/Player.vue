<template>
  <div class="player-window"
    v-if="activity"
    :class="{podcast: sourceType === 'podcast'}"
  >
    <div class="player-close" @click.prevent="toggleActivity"></div>

    <div v-if="sourceType === 'youtube'">
      <vue-plyr ref="plyr" :options="videoOptions">
        <div data-plyr-provider="youtube" :data-plyr-embed-id="source" :rel="0"></div>
      </vue-plyr>
    </div>

    <div v-if="sourceType === 'podcast'">
      <PodcastMini :podcast="podcast"/>

      <vue-plyr ref="plyrAudio" :options="audioOptions">
        <audio controls crossorigin playsinline>
          <source :src="source">
        </audio>
      </vue-plyr>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  components: {
    PodcastMini: () => import('~/components/podcasts/PodcastMini.vue')
  },

  data () {
    return {
      videoOptions: {
        ratio: '16:9',
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'fullscreen'],
        autoplay: true,
        clickToPlay: false,
        youtube: {
          autoplay: 1,
          rel: 0,
        }
      },
      audioOptions: {
        autoplay: true,
        download: true
      }
    }
  },

  computed: {
    ...mapGetters({
      source: 'player/getSource',
      activity: 'player/getActivity',
      sourceType: 'player/getType',
      podcast: 'player/getPodcast'
    })
  },

  watch: {
    source: function(id) {
      if (this.sourceType === 'youtube') {
        this.reinitPlayer(id)
      }
      if (this.sourceType === 'podcast') {
        this.reinitAudio(id)
      }
    }
  },

  methods: {
    ...mapMutations({toggleActivity: 'player/toggleActivity'}),

    async reinitPlayer(id) {
      await this.$nextTick()
      this.$refs.plyr.player.source = {
        type: 'video',
        sources: [
          {
            src: id,
            provider: 'youtube',
          },
        ],
      }
    },

    async reinitAudio(source) {
      const typeChanks = source.split('.')
      const type = typeChanks[typeChanks.length - 1]
      await this.$nextTick()
      this.$refs.plyrAudio.player.source = {
        type: 'audio',
        sources: [
          {
            src: source,
            type: 'audio/'+type,
          },
        ],
      }
    }
  }
}
</script>

<style lang="scss">
.player {
  &-window {
    position: fixed;
    z-index: 100;
    right: 30px;
    bottom: 30px;
    width: 700px;
    background: #FFF;
    border-radius: 6px;

    &.podcast {
      width: 400px;
      max-width: calc(100vw - 30px);

      .podcast-mini {
        margin-bottom: 0;

        &-play {
          display: none;
        }
      }
    }
  }
  &-close {
    position: absolute;
    top: -20px;
    right: -20px;
    width: 40px;
    height: 40px;
    line-height: 38px;
    border: 1px solid #999;
    text-align: center;
    background: #FFF;
    border-radius: 20px;
    color: $font;
    @include fz(20);
    cursor: pointer;
    z-index: 99;
    transition: transform .2s;

    &:before,
    &:after {
      content: "";
      position: absolute;
      left: 10px;
      right: 10px;
      top: 50%;
      height: 1px;
      background: #444;
      transition: background .2s;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }

    &:hover {
      transform: rotate(180deg);

      &:before,
      &:after {
        background: #000;
      }
      
    }
  }

  @media (max-width: 768px) {
    &-window {
      width: calc(100% - 70px);
      left: 35px;
      right: 35px;
      bottom: 15px;

      &.podcast {
        left: auto;
      }
    }
  }

  @media (max-width: 576px) {
    &-window {
      left: 15px;
      right: 15px;
    }

    &-close {
      right: -15px;
      top: -15px;
    }
  }
}
</style>