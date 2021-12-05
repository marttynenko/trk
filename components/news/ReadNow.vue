<template>
  <div class="ui-block read-now">
    <div class="ui-block-title">Сейчас читают</div>

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