<template>
  <header class="header" id="header" ref="header">
    <div class="header-top">
      <div class="inner-wide">
        <div class="header-top-flex flex valign-center align-justify">

          <div class="header-nav-toggler"
            :class="{opened: isNav}"
            @click.prevent="toggleMenu"
          >
            <div class="line-1"></div>
            <div class="line-2"></div>
            <div class="line-3"></div>
          </div>

          <div class="header-logo">
            <Logo />
          </div>

          <div class="header-nav" :class="{opened: isNav}">
            <Nav :closeMenu="closeMenu"/>
          </div>

          <div class="header-radios">
            <Radios />
          </div>

          <Actions :openHandler="openSearch" />
          <Search ref="search"/>

        </div>

        
      </div>
    </div>
    <NewsLine />

  </header>
</template>

<script>
import Nav from "~/components/header/Nav.vue"
import Logo from "~/components/header/Logo.vue"
import Radios from "~/components/RadioLogos.vue"
import Actions from "~/components/header/Actions.vue"
import NewsLine from "~/components/header/NewsLine.vue"
// import Search from '~/components/Search.vue'

export default {
  components: {
    Nav, Logo, Radios, Actions, NewsLine,
    Search: () => import('~/components/Search.vue')
  },

  data() {
    return {
      isNav: false
    }
  },

  methods: {
    toggleMenu() {
      this.isNav = !this.isNav
    },

    closeMenu() {
      this.isNav = false
    },

    openSearch() {
      this.$refs.search.open()
    }
  }
}
</script>

<style lang="scss">
.page-wrapper {
  padding-top: 184px;

  @media (max-width: 1240px) {
    padding-top: 175px;
  }

  @media (max-width: 992px) {
    padding-top: 150px;
  }

  @media (max-width: 480px) {
    padding-top: 104px;
  }
}
header.header {
  margin-bottom: 30px;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  right: 0;
  background: $bg;
}
.header {

  &-top {
    padding-top: 18px;
    padding-bottom: 18px;

    &-flex {
      position: relative;

      @media (min-width: 992px) {
        min-height: 58px;
      }
    }
  }

  &-bottom {
    background: $black;
    color: #FFF;
  }

  &-logo {
    margin-right: 15px;
  }

  &-nav-toggler {
    @media (min-width: 1241px) {
      display: none;
    }
  }

  @media (max-width: 1580px) {
    // &-radios {
    //   display: none;
    // }
  }

  @media (max-width: 1240px) {

    &-radios {
      text-align: right;
      padding-right: 10px;
      width: 100%;
    }
    &-nav {
      display: none;
      position: absolute;
      left: -35px;
      right: -35px;
      top: 100%;
      margin-top: 15px;
      background: #222;
      padding: 20px 35px;
      z-index: 19;

      &.opened {
        display: block;
      }
    }

    &-top {
      padding-top: 15px;
      padding-bottom: 15px;
    }

    &-top-flex {
      position: relative;
      padding-left: 50px;
    }

    &-nav-toggler {
      position: absolute;
      left: -3px;
      top: 50%;
      margin-top: -15px;
      width: 30px;
      height: 30px;
      cursor: pointer;

      & > div {
        position: absolute;
        left: 3px;
        top: 50%;
        margin-top: -1px;
        width: 24px;
        height: 2px;
        background: #222;
        transition: transform .2s;
      }
      .line-1 {
        transform: translateY(-6px);
      }
      .line-3 {
        transform: translateY(6px);
      }

      &.opened {
        .line-2 {
          opacity: 0;
        }
        .line-1 {
          transform: translateY(0px) rotate(45deg);
        }
        .line-3 {
          transform: translateY(0px) rotate(-45deg);
        }
      }
    }
  }

  @media (max-width: 992px) {
    &-top {
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }

  @media (max-width: 533px) {
    &-top-flex {
      padding-left: 40px;
    }
  }

  @media (max-width: 480px) {
    &-top {
      padding-top: 3px;
      padding-bottom: 3px;
    }
  }
}

</style>