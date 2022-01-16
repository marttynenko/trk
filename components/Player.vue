<template>
  <div class="player-window"
    v-if="activity"
  >
    <div class="player-close" @click.prevent="toggleActivity">X</div>
    <vue-plyr ref="plyr" v-if="type === 'video'" :options="videoOptions">
      <div data-plyr-provider="youtube" :data-plyr-embed-id="source"></div>
    </vue-plyr>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  data () {
    return {
      videoOptions: {
        youtube: {
          autoplay: 1
        }
      }
    }
  },

  computed: {
    ...mapGetters({
      source: 'player/getSource',
      activity: 'player/getActivity',
      type: 'player/getType'
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