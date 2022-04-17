<template>
  <div class="static-menu">
    <ul>
      <li><nuxt-link :to="localePath('/about')" exact>{{$t('about')}}</nuxt-link></li>
      <li><nuxt-link :to="localePath('/about/tv')">{{$t('tv')}}</nuxt-link></li>
      <li><nuxt-link :to="localePath('/about/radio')">{{$t('radio')}}</nuxt-link></li>
      <li><nuxt-link :to="localePath('/about/contacts')">{{$t('contacts')}}</nuxt-link></li>
      <li><nuxt-link :to="localePath('/about/vacancies')">{{$t('vacancies')}}</nuxt-link></li>
      <li><nuxt-link :to="localePath('/about/press')">{{$t('press')}}</nuxt-link></li>
    </ul>
  </div>
</template>

<style lang="scss">
.static-menu {
  margin-bottom: 30px;

  li {
    display: inline-block;
    vertical-align: top;
    margin: 0px 20px 10px 0;
  }
  a {
    display: inline-block;
    height: 34px;
    line-height: 32px;
    border: 1px solid $primary;
    background-color: $primary;
    color: #FFF;
    padding: 0px 20px;
    @include fz(14);

    &:hover {
      background-color: $primary_hover;
    }
    &.nuxt-link-active {
      color: $primary;
      background-color: transparent;
    }
  }
}
</style>

<i18n>
{
  "ru": {
    "about": "О компании",
    "tv":"О телевидении",
    "radio":"О радио",
    "contacts":"Контакты",
    "press":"Пресса о нас",
    "vacancies":"Вакансии"
  },
  "by": {
    "about": "Аб кампаніі",
    "tv": "Аб тэлебачанні",
    "radio":"Аб радыё",
    "contacts":"Кантакты",
    "press":"Прэса пра нас",
    "vacancies":"Вакансіі"
  }
}
</i18n>