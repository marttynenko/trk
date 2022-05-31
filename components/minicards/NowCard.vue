<template>
  <div class="read-now-item">
    <NuxtLink :to="localePath(post.URL)" class="read-now-item-title">{{post.NAME}}</NuxtLink>
    <div class="read-now-item-date">{{post.ACTIVE_FROM}}</div>
  </div>
</template>

<script>
export default {
  name: 'NowCard',

  props: {
    post: Object
  }
}
</script>

<style lang="scss">
.read-now {
  &-item {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    &-title {
      display: block;
      font-weight: 600;
      @include fz(16);
      color: $font;
      margin-bottom: 8px;

      &:hover {
        color: $primary;
      }
    }
    
    &-date {
      color: $font_gray;
      @include fz(14);
    }
  }
}
</style>