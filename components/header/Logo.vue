<template>
  <NuxtLink :to="localePath('/')" class="logo">
    <div class="logo-icon">
      <img src="/images/Logo.png" :alt="$t('name')">
    </div>
    <div class="logo-txt">{{ $t('name') }}</div>
  </NuxtLink>
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
    flex: 0 0 80px;
    max-width: 80px;
  }
  &-txt {
    max-width: 175px;
  }
  &:hover {
    color: $font;
  }

  @media (max-width: 1520px) {
    @include fz(14);

    &-icon {
      flex: 0 0 65px;
      max-width: 65px;
    }
    &-txt {
      max-width: 150px;
    }
  }

  @media (max-width: 1420px) and (min-width: 1240px) {
    &-txt {
      display: none;
    }
  }

  @media (max-width: 768px) {
    &-icon {
      margin-right: 0;
      line-height: 0;
    }
    
    &-txt {
      display: none;
    }
  }

  @media (max-width: 480px) {
    &-icon {
      img {
        max-height: 34px;
      }
    }
  }
}
</style>

<i18n>
{
  "ru": {
    "name": "Телерадиокомпания «Гомель»"
  },
  "by": {
    "name": "Тэлерадыёкампанія «Гомель»"
  }
}
</i18n>