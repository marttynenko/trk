<template>
  <div class="player-window"
    v-if="activity"
  >
    <div class="player-close" @click.prevent="toggleActivity">X</div>
    <div class="player-player">
      <!-- <div class="video-player-box"
        v-video-player:myVideoPlayer="playerOptions">
      >
      </div> -->
      <iframe width="700" height="400" :src="`https://www.youtube.com/embed/${source}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  data () {
    return {
      // component options
      // playsinline: true,
      controls: true,
      
      // videojs options
      playerOptions: {
        // muted: true,
        // language: 'en',
        // playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: "video/mp4",
          src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
        }],
        // poster: "/static/images/author.jpg",
      }
    }
  },

  computed: {
    ...mapGetters({
      source: 'player/getSource',
      activity: 'player/getActivity'
    })
  },

  methods: {
    ...mapMutations({toggleActivity: 'player/toggleActivity'})
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
  }
  &-close {
    position: absolute;
    top: -20px;
    right: -20px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #FFF;
    border-radius: 20px;
    color: $font;
    @include fz(20);
    cursor: pointer;
    z-index: 99;
  }
  &-player {
    // width: 768px;
    width: 100%;
    height: 0;
    padding-top: 56.25%;
    max-width: calc(100vw - 60px);

    iframe, object {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      // max-width: 100%;
    }
  }
}
</style>