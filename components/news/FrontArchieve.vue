<template>
  <div class="front-archieve">
    <div class="front-archieve-body"
      v-if="isActive"
    >
      <date-pick
        v-model="date"
        :format="'DD.MM.YYYY'"
        :hasInputElement="false"
        :selectableYearRange="{from: 2016, to: new Date().getFullYear()}"
        :months="localeMonths"
        :weekdays="localeDays"
        :isDateDisabled="isFutureDate"
    ></date-pick>
    </div>

    <div class="front-archieve-toggler ui-btn ui-btn-big" 
      @click.prevent="isActive = !isActive"
    >{{$t('title')}}</div>
  </div>
</template>

<script>
import DatePick from 'vue-date-pick';
import {mapActions} from 'vuex'

export default {
  components: {
    DatePick
  },

  data() {
    return {
      isActive: false,
      date: '',
      localeMonths: [
        'Январь', 'Февраль', 'Март', 'Апрель',
        'Май', 'Июнь', 'Июль', 'Август',
        'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
      ],
      localeDays: ['Пн',"Вт","Ср","Чт","Пт","Сб","Вс"]
    }
  },

  watch: {
    date: function (date) {
      this.toArchieve(date)
    }
  },

  methods: {
    ...mapActions({fetchArchieve: 'archieve/fetchPosts'}),

    isFutureDate(date) {
      const currentDate = new Date();
      return date > currentDate;
    },

    toArchieve(param) {
      if (this.$route.path === '/news/archieve') {
        this.fetchArchieve({date: param})
      }
      this.$router.push({path: this.localePath('/news/archieve'), query: {date: param}})
    }
  }
}
</script>

<style lang="scss">
.front-archieve {
  position: relative;

  // &-toggler {
    // display: flex;
    // align-items: center;
    // justify-content: space-between;
    // @include fz(20);
    // font-weight: 700;
    // text-transform: uppercase;
    // line-height: 1.15;
    // cursor: pointer;

    // .svg-inline {
    //   fill: #2A2A2B;
    // }

    // &:hover {
    //   color: $primary;

    //   .svg-inline {
    //     fill: $primary;
    //   }
    // }
    
  // }
  &-body {
    padding: 10px 15px;
    background: #FFF;
    position: absolute;
    right: 0;
    bottom: 100%;
    margin-bottom: 10px;
    z-index: 9;
    border-radius: 4px;
  }
}
</style>

<i18n>
{
  "ru": {
    "title":"Архив новостей"
  },
  "by": {
    "title":"Архіў навін"
  }
}
</i18n>