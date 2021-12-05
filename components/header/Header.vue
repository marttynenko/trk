<template>
  <header class="header" id="header">
    <div class="header-top">
      <div class="inner-wide">
        <div class="header-top-flex flex valign-center align-justify">

          <div class="header-nav-toggler" @click.prevent="toggleMenu">
            <div class="line-1"></div>
            <div class="line-2"></div>
            <div class="line-3"></div>
          </div>

          <div class="header-logo">
            <Logo />
          </div>

          <div class="header-nav" :class="{opened: isNav}">
            <Nav />
          </div>

          <div class="header-radios">
            <Radios />
          </div>

          <Actions />

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

export default {
  components: {
    Nav, Logo, Radios, Actions, NewsLine
  },

  data() {
    return {
      isNav: false
    }
  },

  methods: {
    toggleMenu() {
      this.isNav = !this.isNav
    }
  }
}
</script>

<style lang="scss">
header.header {
  margin-bottom: 30px;
}
.header {

  &-top {
    padding-top: 18px;
    padding-bottom: 18px;
  }

  &-bottom {
    background: $black;
    color: #FFF;
  }

  &-logo {
    margin-right: 15px;
  }

  @media (max-width: 1580px) {
    &-radios {
      display: none;
    }
  }

  @media (max-width: 992px) {
    &-nav {
      display: none;
      position: absolute;
      left: -35px;
      right: -35px;
      top: 100%;
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
      }
      .line-1 {
        transform: translateY(-6px);
      }
      .line-3 {
        transform: translateY(6px);
      }
    }
  }
}

</style>