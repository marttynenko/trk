<template>
  <nav class="main-nav">
    <ul>
      <li
        v-for="item in menu"
        :key="item.title"
      >
        <a :href="item.url" :class="{active: item.isActive}">{{item.title}}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {url: '#', title: 'Новости', isActive: true},
        {url: '#', title: 'Спецпроекты', isActive: false},
        {url: '#', title: 'Телепрограмма', isActive: false},
        {url: '#', title: 'Подкасты', isActive: false},
        {url: '#', title: 'Реклама и услуги', isActive: false},
        {url: '#', title: 'О компании', isActive: false},
      ]
    }
  }
}
</script>

<style lang="scss">
.main-nav {
  li {
    display: inline-block;
    vertical-align: middle;
    margin-right: 25px;
  }
  a {
    display: block;
    height: 32px;
    line-height: 32px;
    padding: 0px 12px;
    font-weight: 600;
    @include fz(14);
    text-transform: uppercase;
    color: $font;
    border-radius: 6px;

    &:hover {
      color: $primary;
    }

    &.active {
      background: $primary;
      color: #FFF;
    }
  }
}

</style>