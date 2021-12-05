<template>
  <div class="header-bottom" 
    v-if="posts && posts.length"
  >
    <div class="inner-wide">
      <div class="news-line">
        <marquee behavior="altemate" loop="infinite">
          <div class="news-line-item"
            v-for="post in posts"
            :key="post.ID"
          >
            <NuxtLink :to="'/news/'+post.CODE" class="news-line-item-link">{{post.NAME}}</NuxtLink>
          </div>
        </marquee>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Newsline",

  async fetch() {
    await this.$store.dispatch('newsline/fetchPosts')
  },

  computed: {
    ...mapGetters({posts: 'newsline/getPosts'})
  },

  data () {
    return {
      news: [
        {title: 'В Токио началась церемония открытия Олимпийских игр', url: '#'},
        {title: 'Итоги Олимпиады за 26 июля: три золота Беларуси', url: '#2'},
        {title: 'Депутаты Ливана одобрили кандидатуру Микати на должность премьера', url: '#3'},
        {title: 'Первый день токийских игр завершился сразу несколькими сенсациями', url: '#4'},
      ]
    }
  }
}
</script>


<style lang="scss">
.news-line {
  white-space: nowrap;
  line-height: 0;

  &-item {
    position: relative;
    padding-left: 22px;
    display: inline-block;
    vertical-align: middle;
    height: 60px;
    line-height: 60px;
    margin-right: 50px;
    white-space: nowrap;
    font-weight: 500;
    @include fz(14);
    letter-spacing: 0.04em;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      margin-top: -9px;
      background: url(~/assets/images/lightning.svg?inline) center no-repeat;
      background-size: 13px;
      width: 13px;
      height: 18px;
    }
    
    &-link {
      color: #CBCBCB;

      &:hover {
        color: #FFF;
      }
    }
  }
}
</style>