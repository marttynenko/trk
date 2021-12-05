<template>
  <aside class="sidebar">
    <read-now/>
    <news-archieve />
    <last-editions />
    <telegram-feed />

    <!-- <div class="ui-banner">
      <img src="/images/banners/aside-banner.png" alt="banner">
    </div> -->
  </aside>
</template>

<script>
import ReadNow from '~/components/news/ReadNow.vue'
import NewsArchieve from '~/components/news/NewsArchieve.vue'
import LastEditions from '~/components/news/LastEditions.vue'
import TelegramFeed from '~/components/TelegramFeed.vue'

export default {
  components: {
    ReadNow,
    NewsArchieve,
    LastEditions,
    TelegramFeed
  },
}
</script>