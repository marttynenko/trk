<template>
  <div class="schedule-days"  v-if="dateRange && dateRange.length">
    <div class="schedule-days-carousel" ref="swiper" v-swiper:swiperSchedule="swiperOptions">
      <div class="swiper-wrapper">

        <div class="swiper-slide schedule-days-slide"
          v-for="(day,index) in dateRange"
          :key="day.dateFormated"
        >
          <div class="schedule-days-item" 
            :class="{active: index === activeIndex}"
            @click.prevent="dayHandler(day.dateFormatted, index)"
          >
            <div class="schedule-days-day">{{printWeekday(index, day.weekday)}}</div>
            <div class="schedule-days-date">{{day.dateMonth}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="swiper-button-next schedule-days-next"></div>
    <div class="swiper-button-prev schedule-days-prev"></div>
    
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import { Swiper, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  directives: {
    swiper: directive
  },

  components: {
    Swiper
  },

  data () {
    return {
      dateRange: [],
      activeIndex: 2,
      swiperOptions: {
        loop: false,
        slidesPerView: 'auto',
        navigation: {
          nextEl: ".schedule-days-next",
          prevEl: ".schedule-days-prev",
        }
      }
    }
  },


  methods: {
    // ...mapMutations({setDate: 'schedule/setDate'}),
    ...mapActions({fetchSchedule: 'schedule/fetchSchedule'}),

    createRange(min,max) {
      for (let i=min; i<max; i++) {
        const obj = {}
        const ms = 1000*60*60*24*i
        const d = new Date(Date.now() + 1000*60*60*24*i)
        
        const day = d.getDate() < 10 ? '0'+d.getDate() : d.getDate()
        const month = d.getMonth()+1 < 10 ? '0'+(d.getMonth()+1) : d.getMonth()+1
        obj.dateFormatted = day+'.'+month+'.'+d.getFullYear()

        obj.date = d

        obj.dateMonth = new Intl.DateTimeFormat('ru-RU', {
          month: 'long', day: 'numeric'
        }).format(d)

        obj.weekday = new Intl.DateTimeFormat('ru-RU', {
          weekday: 'long'
        }).format(d)

        this.dateRange.push(obj)
      }
      // console.log(this.dateRange)
    },

    printWeekday(index,name) {
      if (index === 1) return 'Вчера'
      if (index === 2) return 'Сегодня'
      if (index === 3) return 'Завтра'
      return name
    },

    dayHandler(date, index) {
      this.fetchSchedule(date)
      this.activeIndex = index
    }
  },

  mounted () {
    this.createRange(-2,10)
    console.log(this.$swiper)

    this.fetchSchedule(this.dateRange[this.activeIndex].dateFormatted)
    // this.fetchSchedule('05.09.2021')
  }
}
</script>

<style lang="scss">
.schedule-days {
  margin-bottom: 110px;
  border-bottom: 2px solid #c4c4c4;
  position: relative;
  padding-left: 80px;
  padding-right: 80px;

  &-carousel {
    margin-bottom: 15px;
  }

  &-slide {
    padding-right: 45px;
    width: fit-content;
  }

  &-item {
    position: relative;
    color: #818181;
    cursor: pointer;
    font-weight: 600;
    white-space: nowrap;
    border-left: 3px solid transparent;

    &.active, &.today {
      color: $font;
      padding-left: 20px;
      border-left-color: $primary;
    }
  }

  &-day {
    @include fz(24);
    text-transform: capitalize;
  }

  &-date {
    @include fz(15);
  }

  &-prev,
  &-next {
    width: 24px;
    height: 24px;
    color: #000;
    z-index: 9;
    margin-top: -17px;

    &:after {
      font-size: 24px;
    }
  }

  &-prev {
    left: 0px;
  }

  &-next {
    right: 0px;
  }

  @media (max-width: 576px) {
    margin-bottom: 60px;

    &-slide {
      padding-right: 30px;
    }
    &-day {
      @include fz(20);
    }
    &-date {
      @include fz(14);
    }
  }
}
</style>