<template>
  <div class="podcast-card">
    <div class="podcast-card-img">
      <img :src="podcast.IMG" :alt="podcast.NAME">
    </div>
    <div class="podcast-card-body">
      <div class="podcast-card-title">podcast.NAME</div>
      <div class="podcast-card-actions">
        <div class="podcast-card-play" data-source=""></div>
        <div class="podcast-card-actions-right">
          <div class="podcast-card-share"></div>
          <div class="podcast-card-download"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Podcast",

  props: {
    podcast: Object
  }
}
</script>

<style lang="scss">
.podcast-card {
  display: flex;
  margin-bottom: 10px;
  background-color: #fff;

  &-img {
    flex: 0 0 105px;
    max-width: 25%;
    position: relative;
    height: 105px;
    overflow: hidden;

    img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      height: 100%;
      min-width: 100%;
      max-width: none;
    }
  }

  &-body {
    position: relative;
    padding: 5px 10px 35px 10px;
  }

  &-title {
    font-weight: 600;
    @include fz(16);
    max-height: 65px;
    overflow: hidden;
    line-height: 1.25;
  }

  &-actions {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid #E3E3E3;
    padding: 6px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-play {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    width: 18px;
    height: 18px;
    background: url(@/assets/images/icons/play-circle.svg?inline);
    background-size: contain;
  }
  &-share {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    width: 18px;
    height: 18px;
    background: url(@/assets/images/icons/share.svg?inline);
    background-size: contain;
    margin-right: 12px;
  }
  &-downloaw {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    width: 18px;
    height: 18px;
    background: url(@/assets/images/icons/download.svg?inline);
    background-size: contain;
  }
}
</style>