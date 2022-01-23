<template>
  <nav class="main-nav">
    <ul>
      <!-- <li
        v-for="item in menu"
        :key="item.title"
      >
        <NuxtLink :to="localePath(item.url)">{{item.title}}</NuxtLink>
      </li> -->
      <li>
        <NuxtLink :to="localePath('/news')" @click.native="closeMenu">{{$t('news')}}</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localePath('/shows')" @click.native="closeMenu">{{$t('specials')}}</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localePath('/schedule')" @click.native="closeMenu">{{$t('tv')}}</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localePath('/podcasts')" @click.native="closeMenu">{{$t('podcasts')}}</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localePath('/reklama')" @click.native="closeMenu">{{$t('reklama')}}</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localePath('/about')" @click.native="closeMenu">{{$t('about')}}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    closeMenu: Function
  },
  // data() {
  //   return {
  //     menu: [
  //       {url: '/news', title: this.$t('news')},
  //       {url: '/shows', title: this.$t('specials')},
  //       {url: '/schedule', title: this.$t('tv')},
  //       {url: '/podcasts', title: this.$t('podcasts')},
  //       {url: '/reklama', title: this.$t('reklama')},
  //       {url: '/about', title: this.$t('about')},
  //     ]
  //   }
  // },

  methods: {
    handler() {
      console.log('click')
    }
  }
}
</script>

<style lang="scss">
.main-nav {
  white-space: nowrap;
  overflow: hidden;
  
  li {
    display: inline-block;
    vertical-align: middle;
    // margin-right: 25px;
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

    &.active,
    &.nuxt-link-active {
      background: $primary;
      color: #FFF;
    }
  }

  @media (max-width: 1660px) {
    li {
      margin-right: 20px;
    }
    a {
      padding: 0px 6px;
    }
  }

  @media (max-width: 1360px) {
    li {
      margin-right: 15px;
    }
    a {
      @include fz(13);
    }
  }

  @media (max-width: 992px) {
    li {
      display: block;
    }
    a {
      height: auto;
      line-height: $lh;
      padding: 10px 0px;
      color: #FFF;

      &.active,
      &.nuxt-link-active {
        background: transparent;
        color: $primary;
        font-weight: 700;
      }
    }
  }
}

</style>

<i18n>
{
  "ru": {
    "news": "Новости",
    "specials": "Спецпроекты",
    "tv": "Телепрограмма",
    "podcasts": "Подкасты",
    "reklama": "Реклама и услуги",
    "about": "О компании"
  },
  "by": {
    "news": "Навiны",
    "specials": "Спецпраекты",
    "tv": "Праграмма перадач",
    "podcasts": "Падкасты",
    "reklama": "Рэклама i паслугi",
    "about": "Пра нас"
  }
}
</i18n>