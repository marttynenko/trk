<template>
  <div class="podcast-banner">
    <div class="inner">
      <div class="row valign-center">
        <div class="col-lg-6 col-md-8">
          <div class="podcast-banner-data">
            <div class="podcast-banner-btn">
              <span class="ui-btn" v-if="banner.THEME">{{banner.THEME}}</span>
            </div>

            <div class="podcast-banner-title">{{banner.NAME}}</div>

            <div class="podcast-banner-txt" v-html="banner.PREVIEW_TEXT"></div>
          </div>
        </div>

        <div class="col-lg-6 col-md-4" v-if="banner.IMG">
          <div class="podcast-banner-img">
            <img :src="banner.IMG" loading="lazy" :alt="banner.NAME">
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    banner: Object
  }
}
</script>

<style lang="scss">
.podcast-banner {
  margin-top: -30px;
  margin-bottom: 30px;
  padding-top: 40px;
  padding-bottom: 50px;
  background: #282828;
  color: #FFF;
  @include fz(16);

  &-btn {
    margin-bottom: 30px;
  }
  &-title {
    @include fz(50);
    font-weight: 700;
    margin-bottom: 30px;
    color: $primary;
  }
  &-img {
    text-align: center;
  }

  @media (max-width: 992px) {
    &-data {
      margin-bottom: 40px;
    }
  }

  @media (max-width: 768px) {
    &-title {
      @include fz(40);
    }
  }
  @media (max-width: 576px) {
    &-title {
      @include fz(30);
    }
  }
}
</style>