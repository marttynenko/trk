<template>
  <div class="archieve-block ui-block">
    <div class="archieve-block-toggler" 
      @click.prevent="isActive = !isActive"
    >
      {{$t('title')}}
      <iconCalendar/>
    </div>

    <div class="archieve-block-body"
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
  </div>
</template>

<script>
import iconCalendar from '@/assets/images/icons/calendar.svg'
import DatePick from 'vue-date-pick';
import {mapActions} from 'vuex'
// import 'vue-date-pick/dist/vueDatePick.css';

export default {
  components: {
    iconCalendar, DatePick
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
.archieve-block {
  border: 1px solid $font;
  padding: 5px 10px;

  &-toggler {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include fz(20);
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.15;
    cursor: pointer;

    .svg-inline {
      fill: #2A2A2B;
    }

    &:hover {
      color: $primary;

      .svg-inline {
        fill: $primary;
      }
    }
    
  }
  &-body {
    padding-top: 10px;
    padding-bottom: 10px;
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