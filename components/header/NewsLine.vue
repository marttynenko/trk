<template>
  <div class="header-bottom" v-if="news">
    <div class="header-inner">
      <div class="news-line">
        <div class="news-line-item"
          v-for="item in news"
          :key="item.url"
        >
          <a :href="item.url" class="news-line-item-link">{{item.title}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Newsline",

  data () {
    return {
      news: [
        {title: 'В Токио началась церемония открытия Олимпийских игр', url: '#'},
        {title: 'Итоги Олимпиады за 26 июля: три золота Беларуси', url: '#'},
        {title: 'Депутаты Ливана одобрили кандидатуру Микати на должность премьера', url: '#'},
        {title: 'Первый день токийских игр завершился сразу несколькими сенсациями', url: '#'},
      ]
    }
  }
}
</script>


<style lang="scss">
.news-line {
  white-space: nowrap;

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
      background: url(~/assets/images/lightning.svg) center no-repeat;
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