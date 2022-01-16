<template>
  <div class="podcast-card">
    <img :src="podcast.IMG" :alt="podcast.NAME" loading="lazy" class="podcast-card-img">
    <div class="podcast-card-txt">
      <div class="podcast-card-title">{{podcast.NAME}}</div>
      <div class="podcast-card-theme" v-if="podcast.THEME">{{podcast.THEME}}</div>
    </div>
    <div class="podcast-card-play" :data-src="podcast.SRC">
      <div class="podcast-card-play-status"></div>
    </div>
    <div class="podcast-card-actions">
      <div class="podcast-card-share"></div>
      <a :href="podcast.SRC" download class="podcast-card-download"></a>
    </div>
  </div>
</template>


<script>
export default {
  name: "podcast-card",

  props: {
    podcast: {
      type: Object,
      required: true
    }
  }
}
</script>


<style lang="scss">
.podcast-card {
  position: relative;
  padding-bottom: 100%;
  margin-bottom: 30px;
  overflow: hidden;
  background: $black;
  color: #FFF;
  @include fz(16);

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(#000,.3);
  }

  &-img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
    max-width: 105%;
  }

  &-txt {
    position: absolute;
    z-index: 1;
    left: 10px;
    top: 10px;
    right: 10px;
    max-height: 92px;
    overflow: hidden;
  }

  &-title {
    @include fz(24);
    font-weight: 600;
    margin-bottom: 5px;
    line-height: 1.3;
  }

  &-play {
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 84px;
    height: 65px;
    background: url(@/assets/images/icons/podcast-play.svg?inline) center no-repeat;
    background-size: contain;
    cursor: pointer;

    &-status {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      width: 52px;
      height: 52px;
      margin: 0 auto;
      background-size: 24px;
      background-repeat: no-repeat;
      background-position: center;
      background-image: url(@/assets/images/icons/play-light.svg?inline);
    }
  }

  &-actions {
    position: absolute;
    z-index: 1;
    right: 10px;
    bottom: 10px;
    text-align: right;
  }

  &-share,
  &-download {
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
    transition: opacity .2s;
    width: 16px;
    height: 16px;
    cursor: pointer;
    filter: brightness(10);

    &:hover {
      opacity: 0.75;
    }
  }
  &-share {
    background: url(@/assets/images/icons/share.svg?inline) center no-repeat;
    background-size: contain;
  }
  &-download {
    background: url(@/assets/images/icons/download.svg?inline) center no-repeat;
    background-size: 22px;
  }
}
</style>