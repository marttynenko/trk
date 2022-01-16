<template>
  <div class="key-themes">
    <NuxtLink 
      class="key-themes-label"
      :to="localePath('/news/keythemes/')"
    >{{$t('title')}}:</NuxtLink>
    <div class="key-themes-links">
      <NuxtLink 
        class="key-themes-link"
        v-for="link in links"
        :key="link.ID"
        :to="localePath('/news/keythemes/'+link.CODE)"
      >{{link.NAME}}</NuxtLink>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  async fetch() {
    await this.$store.dispatch('keythemes/fetchLinks')
  },

  computed: {
    ...mapGetters({links: 'keythemes/getLinks'})
  }

}
</script>

<style lang="scss">
.key-themes {
  &-label {
    color: $primary;
    display: inline-block;
    vertical-align: top;
    margin-right: 20px;
    margin-bottom: 5px;
    font-weight: 600;
  }
  &-links {
    display: inline-block;
    vertical-align: top;
  }
  &-link {
    display: inline-block;
    margin-right: 20px;
    margin-bottom: 5px;
    color:#FFF;
  }

  @media (max-width: 1140px) and (min-width: 768px) {
    margin-bottom: 15px;
  }
}
</style>

<i18n>
{
  "ru": {
    "title":"Ключевые темы"
  },
  "by": {
    "title":"Ключавыя тэмы"
  }
}
</i18n>