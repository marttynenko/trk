<template>
  <div class="schedule-days">
    <div class="schedule-days-carousel" v-swiper="swiperOptions">
      <div class="swiper-wrapper">
        <div class="schedule-days-slide">
          <div class="schedule-days-item active">
            <div class="schedule-days-day">Сегодня</div>
            <div class="schedule-days-date">10 декабря</div>
          </div>
        </div>
        <div class="schedule-days-slide">
          <div class="schedule-days-item">
            <div class="schedule-days-day">Завтра</div>
            <div class="schedule-days-date">11 декабря</div>
          </div>
        </div>
        <div class="schedule-days-slide">
          <div class="schedule-days-item">
            <div class="schedule-days-day">Воскресенье</div>
            <div class="schedule-days-date">12 декабря</div>
          </div>
        </div>
        
        
      </div>

      <div class="swiper-button-next schedule-days-next"></div>
      <div class="swiper-button-prev schedule-days-prev"></div>
    </div>
  </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  directives: {
    swiper: directive
  },

  data () {
    return {
      swiperOptions: {
        loop: false,
        slidesPerView: "auto",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }
      }
    }
  },
}
</script>

<style lang="scss">
.schedule-days {
  margin-bottom: 110px;
  border-bottom: 2px solid #c4c4c4;

  &-carousel {
    margin-bottom: 15px;
    padding-left: 80px;
    padding-right: 80px;
  }

  &-slide {
    padding-right: 50px;
  }

  &-item {
    position: relative;
    color: #818181;
    cursor: pointer;
    font-weight: 600;

    &.active, &.today {
      color: $font;
      padding-left: 20px;
      border-left: 3px solid $primary;
    }
  }

  &-day {
    @include fz(24);
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
    margin-top: calc(-1 * 24px / 2);

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
}
</style>