<template>
  <div class="error-page">
    <div class="error-page-code">{{error.statusCode}}</div>
    <div class="error-page-msg" v-if="error.statusCode === 404">К сожалению, запрашиваемая вами страница не найдена</div>
    <div class="error-page-msg" v-else>Произошла непредвиденная ошибка</div>
    <nuxt-link to="/" class="error-page-btn">На главную →</nuxt-link>
  </div>
</template>

<script>


export default {
  props: ['error'],
  layout: 'error',
}
</script>

<style lang="scss">
.error-page {
  text-align: center;
  margin: 6vh auto 10vh;
  max-width: 1100px;
  padding: 0px 15px;

  &-code {
    @include fz(200);
    font-weight: 600;
    line-height: 1;
  }
  &-msg {
    @include fz(50);
    margin-bottom: 30px;
  }
  &-btn {
    display: inline-block;
    vertical-align: middle;
    height: 70px;
    line-height: 66px;
    padding: 0px 70px;
    border: 2px solid $primary;
    color: $primary;
    @include fz(30);
    font-weight: 600;

    &:hover {
      background: rgba($primary, 0.05);
      color: $primary;
    }
  }

  @media (max-width: 768px) {
    &-code {
      @include fz(130);
    }
    &-msg {
      @include fz(36);
    }
  }

  @media (max-width: 450px) {
    &-code {
      @include fz(110);
    }
    &-msg {
      @include fz(26);
    }
    &-btn {
      padding: 0px 5px;
      @include fz(20);
      display: block;
      width: 100%;
      height: 50px;
      line-height: 46px;
    }
  }
}
</style>