<template>
  <div class="vidgets">
    <div class="vidgets-item" v-if="weather">{{parseInt(weather.main.temp,10)}}°C</div>
    <span v-if="currency">
      <div class="vidgets-item"
        v-for="item in currency"
        :key="item.Cur_ID"
      >{{item.Cur_Abbreviation + ' ' + (item.Cur_OfficialRate.toFixed(2))}}</div>
    </span>
  </div>
  
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  async fetch() {
    await this.$store.dispatch('currency/fetchCurrency')
    await this.$store.dispatch('currency/fetchWeather')
  },

  computed: {
    ...mapGetters({
      currency: 'currency/getCurrency',
      weather: 'currency/getWeather',
    })
  }
}
</script>

<style lang="scss" scoped>
  .vidgets {
    white-space: nowrap;
    border-left: 1px solid rgba(#FFF,.15);

    &-item {
      display: inline-block;
      vertical-align: top;
      padding: 0px 10px;
      height: 26px;
      line-height: 26px;
      border-right: 1px solid rgba(#FFF,.15);
    }
  }
</style>