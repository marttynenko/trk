<template>
  <NuxtLink to="/" class="logo">
    <div class="logo-icon">
      <img src="/images/Logo.png" alt="Телерадиокомпания Гомель">
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

  @media (max-width: 1360px) {
    @include fz(14);

    &-icon {
      flex: 0 0 65px;
      max-width: 65px;
    }
    &-txt {
      max-width: 150px;
    }
  }

  @media (max-width: 1240px) and (min-width: 992px) {
    &-icon {
      margin-right: 0;
    }
    
    &-txt {
      display: none;
    }
  }

  @media (max-width: 450px) {
    &-icon {
      margin-right: 0;
    }
    
    &-txt {
      display: none;
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
    "name": "Телерадыекампанiя «Гомель»"
  }
}
</i18n>