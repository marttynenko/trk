<template>
  <div class="header-action header-action-langs">
    <div class="header-action-langs-current">{{currentLocale}}</div>
    <div class="header-action-langs-list">
      <nuxt-link
        v-for="locale in availableLocales"
        class="header-action-langs-lang"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
      >{{ locale.name }}</nuxt-link>
      <!-- :to="localePath('/',locale.code)" -->
      <!-- :to="switchLocalePath(locale.code)" -->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },

    currentLocale() {
      const cur = this.$i18n.locales.filter(i => i.code === this.$i18n.locale)
      return cur[0].name
    },
  }
}
</script>

<style lang="scss">
.header-action {
  &-langs {
    margin-right: 0 !important;
    text-transform: uppercase;

    &-current {
      height: 24px;
      line-height: 24px;
      display: inline-block;
      vertical-align: middle;
      padding: 0px 18px 0px 8px;
      border-radius: 3px;
      background-color: $black;
      color: #FFF;

      &:after {
        content: "";
        position: absolute;
        right: 6px;
        top: 50%;
        margin-top: -4px;
        width: 8px;
        height: 8px;
        background: url(@/assets/images/toggler.svg?inline) center no-repeat;
        background-size: contain;
      }
    }

    &-list {
      position: absolute;
      visibility: hidden;
      opacity: 0;
      top: 100%;
      margin-top: -3px;
      left: 0;
      min-width: 100%;
      background: $primary;
      padding-top: 3px;
      border-radius: 0px 0px 3px 3px;
      overflow: hidden;
    }
    &-lang {
      color: #FFF;
      padding: 0px 8px;
      line-height: 24px;
      display: block;

      &:hover {
        color: #FFF;
        background-color: $primary_hover;
      }
    }

    &:hover {
      .header-action-langs-current {
        background-color: $primary;
      }
      .header-action-langs-list {
        visibility: visible;
        opacity: 1;
      }
    }
  }

}
</style>