<template>
  <div class="themes-panel">
    <div class="themes-panel-label">{{$t('title')}}: </div>
    <select name="" id="" class="themes-panel-select" @change="change($event)">
      <option value="0">{{$t('all')}}</option>
      <option
        v-for="theme in themes"
        :key="theme.ID"
        :value="theme.CODE"
      >{{theme.NAME}}</option>
    </select>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  async fetch() {
    await this.$store.dispatch('keythemes/fetchAllLinks')
  },

  computed: {
    ...mapGetters({themes: 'keythemes/getAllLinks'})
  },

  methods: {
    change(event) {
      // console.log(event.target.value)
      this.$router.push(this.localePath('/news/keythemes/'+event.target.value))
    }
  },
  
}
</script>


<style lang="scss">
.themes-panel {
  padding-bottom: 22px;
  margin-bottom: 32px;
  border-bottom: 1px solid #b6b6b6;

  &-label {
    display: inline-block;
    vertical-align: middle;
    margin-right: 30px;
    @include fz(20);
    font-weight: 600;
    margin-bottom: 10px;
  }
  &-select {
    display: inline-block;
    vertical-align: middle;
    height: 32px;
    margin-bottom: 10px;
    background: $primary;
    border-radius: 5px;
    border: 0;
    outline: none;
    color: #FFF;
    cursor: pointer;
    width: auto;
    max-width: 160px;
    padding: 0px 10px;
    @include fz(16);
    font-weight: 400;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>


<i18n>
{
  "ru": {
    "title": "Ключевые темы",
    "all": "Все"
  },
  "by": {
    "title": "Ключавыя тэмы",
    "all": "Усе"
  }
}
</i18n>