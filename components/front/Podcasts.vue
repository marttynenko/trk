<template>
  <div class="ui-block our-podcasts">
    <div class="ui-block-header">
      <h4 class="ui-block-header-title">{{$t('title')}}</h4>
      <div class="ui-block-header-btn">
        <NuxtLink :to="localePath('/podcasts')" class="ui-btn">{{$t('btn')}}</NuxtLink>
      </div>
    </div>

    <div class="our-podcasts-list ui-scroller" v-if="podcasts && podcasts.length">
      <Podcast 
        v-for="item in podcasts"
        :key="item.id"
        :podcast="item"
      />
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Podcast from '~/components/podcasts/PodcastMini.vue'

export default {
  components: {
    Podcast
  },

  async fetch() {
    await this.$store.dispatch('podcasts/fetchBlock')
  },

  computed: {
    ...mapGetters({podcasts:'podcasts/getBlock'})
  }
}
</script>

<style lang="scss">
.our-podcasts {
  &-list {
    max-height: 550px;
  }
}
</style>

<i18n>
{
  "ru": {
    "title":"Наши подкасты",
    "btn": "Слушать все"
  },
  "by": {
    "title":"Нашы падкасты",
    "btn": "Слухаць усё"
  }
}
</i18n>