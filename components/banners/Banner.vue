<template>
  <div class="banner" :class="[classes]">
    <a :href="banner.LINK" target="_blank" class="banner-link">
      <img :src="banner.IMG" :alt="banner.NAME" class="banner-img" loading="lazy">
    </a>
  </div>
</template>

<script>


export default {
  props: {
    banner: {
      type: Object,
      required: true
    },
    classes: {
      type: String
    }
  },
}
</script>

<style lang="scss">
.banner {
  &-link {
    line-height: 0;
  }
  &-img {
    display: block;
    margin: 0 auto;
  }
}
</style>