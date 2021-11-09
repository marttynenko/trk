<template>
  <header class="header" id="header">
    <div class="header-top">
      <div class="header-inner">
        <div class="flex valign-center align-justify">

          <div class="header-logo">
            <Logo />
          </div>

          <Nav />

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
import Radios from "~/components/header/Radios.vue"
import Actions from "~/components/header/Actions.vue"
import NewsLine from "~/components/header/NewsLine.vue"

export default {
  components: {
    Nav, Logo, Radios, Actions, NewsLine
  }
}
</script>

<style lang="scss">
header.header {
  margin-bottom: 32px;
}
.header {
  &-inner {
    max-width: 1750px;
    margin: 0 auto;
    padding-left: 35px;
    padding-right: 35px;
  }

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
}

</style>