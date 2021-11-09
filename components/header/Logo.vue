<template>
  <a href="/" class="logo">
    <div class="logo-icon">
      <img src="images/Logo.png" alt="Телерадиокомпания Гомель">
    </div>
    <div class="logo-txt">Телерадиокомпания «Гомель»</div>
  </a>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.logo {
  display: flex;
  align-items: center;
  color: $font;
  @include fz(17);
  line-height: 1.15;

  &-icon {
    margin-right: 10px;
  }
  &-txt {
    max-width: 175px;
  }
  &:hover {
    color: $font;
  }
}
</style>