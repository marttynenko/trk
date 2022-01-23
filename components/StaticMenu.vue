<template>
  <div class="static-menu">
    <ul>
      <li><nuxt-link to="/about" exact>О компании</nuxt-link></li>
      <li><nuxt-link to="/about/tv">О телевидении</nuxt-link></li>
      <li><nuxt-link to="/about/radio">О радио</nuxt-link></li>
      <li><nuxt-link to="/about/contacts">Контакты</nuxt-link></li>
      <li><nuxt-link to="/about/vacancies">Вакансии</nuxt-link></li>
      <li><nuxt-link to="/about/press">Пресса о нас</nuxt-link></li>
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