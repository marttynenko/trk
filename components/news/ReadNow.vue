<template>
  <div class="ui-block read-now" v-if="posts && posts.length">
    <div class="ui-block-header">
      <div class="ui-block-title">{{$t('title')}}</div>
    </div>
    

    <div class="read-now-list">
      <div class="ui-scroller" :style="{maxHeight: blockHeight+'px'}">
        
        <NowCard 
          v-for="post in posts"
          :key="post.ID"
          :post="post"
        />

      </div>
    </div>
  </div>
</template>

<script>
import NowCard from '~/components/minicards/NowCard.vue'
import {mapGetters} from 'vuex'

export default {
  components: {
    NowCard
  },

  props: {
    blockHeight: {
      type: Number,
      default: 415
    }
  },

  async fetch() {
    await this.$store.dispatch('readnow/fetchPosts');
  },

  computed: {
    ...mapGetters({posts: 'readnow/getPosts'})
  }
}
</script>

<i18n>
{
  "ru": {
    "title":"Сейчас читают"
  },
  "by": {
    "title":"Зараз чытаюць"
  }
}
</i18n>