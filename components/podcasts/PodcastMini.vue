<template>
  <div class="podcast-mini" v-if="podcast.AUDIO">
    <div class="podcast-mini-img">
      <img :src="podcast.IMG" :alt="podcast.NAME" loading="lazy">
      <div class="podcast-mini-play" @click.prevent="play({source: podcast.AUDIO, podcast: podcast})"></div>
    </div>
    <div class="podcast-mini-body">
      <div class="podcast-mini-title">{{podcast.NAME}}</div>
        
      </div>
      <div class="podcast-mini-actions">
        <div class="podcast-mini-right">
          <div class="podcast-mini-share"></div>
          <a :href="podcast.AUDIO" download target="_blank" class="podcast-mini-download"></a>
        </div>
      
    </div>
  </div>
</template>


<script>
import {mapMutations} from 'vuex'

export default {
  name: "podcast-mini",

  props: {
    podcast: {
      type: Object,
      required: true
    }
  },

  methods: {
    ...mapMutations({
      play: 'player/changeSource'
    })
  }
}
</script>


<style lang="scss">
.podcast-mini {
  background: #FDF7F1;
  margin-bottom: 8px;
  position: relative;
  display: flex;

  &-img {
    flex: 0 0 80px;
    max-width: 80px;
    min-width: 80px;
    height: 80px;
    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      min-width: 100%;
      min-height: 100%;
      max-width: 130%;
      display: block;
    }
  }

  &-body {
    padding: 10px 10px 0px;
    width: 100%;
  }
  &-title {
    @include fz(16);
    font-weight: 600;
    line-height: 1.2;
    height: 38px;
    overflow: hidden;
  }
  &-actions {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 80px;
    font-size: 0;
    border-top: 1px solid #E3E3E3;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  &-share,
  &-download {
    display: inline-block;
    vertical-align: middle;
    margin-left: 9px;
    transition: opacity .2s;
    width: 14px;
    height: 14px;
    cursor: pointer;

    &:hover {
      opacity: 0.85;
    }
  }
  &-share {
    background: url(@/assets/images/icons/share.svg?inline) center no-repeat;
    background-size: contain;
  }
  &-download {
    background: url(@/assets/images/icons/download.svg?inline) center no-repeat;
    background-size: 17px;
  }
  &-play {
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    background: #FFF url(@/assets/images/icons/play-circle.svg?inline) center no-repeat;
    background-size: contain;
    border-radius: 50%;
    cursor: pointer;
    width: 36px;
    height: 36px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    transition: transform .2s;

    &:hover {
      transform: translate(-50%,-50%) scale(1.05);
    }
  }
}

</style>