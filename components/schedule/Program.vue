<template>
  <div class="program" v-if="schedule && schedule.length">
    <div class="program-item" 
      v-for="(item,index) in schedule"
      :key="item.id"
      :class="{'program-item-onair': index === activeIndex}"
    >
      <div class="program-item-time">{{item.TIME}}</div>
      <div class="program-item-line"></div>
      <div class="program-item-info">
        <div class="program-item-name">{{item.NAME}}</div>
        <div class="program-item-details"
          v-if="item.DESCR && item.DESCR.length"
        >{{item.DESCR}}</div>
      </div>
    </div>
  </div>

  <div class="program-not" v-else>{{$t('alert')}}</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      activeIndex: 0
    }
  },

  computed: {
    ...mapGetters({schedule: 'schedule/getSchedule'})
  },

  methods: {
    findActiveElement() {
      const now = new Date()
      this.activeIndex = this.mapArray(now)
    },

    mapArray(now) {
      let index = -1

      for (let i = 0; i < this.schedule.length; i++) {
        const item = this.schedule[i]
        if (item.DATE.valueOf() > now.valueOf()) {
          index = i
          break
        }
      }
      
      return index !== 0 ? index-1 : index
    }
  },

  watch: {
    schedule: function(data) {
      if (data.length) {
        this.findActiveElement()
      }
    }
  },

  mounted() {
    if (this.schedule.length) {
      this.findActiveElement()
    }
  }
}
</script>


<style lang="scss">
.program-not {
  @include fz(20);
  margin-bottom: 50px;
}
.program-item {
  display: flex;
  position: relative;
  padding: 0px 15px;
  color: #818181;

  &.notactive {
    color: #cbcbcb;
  }

  &-time {
    flex: 0 0 158px;
    max-width: 158px;
    @include fz(36);
    padding: 30px 15px 30px 10px;
  }
  &-line {
    flex: 0 0 4px;
    max-width: 4px;
    background: #282828;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: 48px;
      left: 50%;
      margin-left: -10px;
      width: 20px;
      height: 20px;
      background: #282828;
      border-radius: 50%;
    }
  }
  &-info {
    width: 100%;
    padding: 43px 0px 30px 70px;
  }
  &-name {
    @include fz(24);
  }
  &-details {
    @include fz(16);
    font-weight: 400;
  }
  &-onair {
    font-weight: 600;
    background: #282828;
    color: #FFF;

    .program-item-line:before {
      background: $primary;
      box-shadow: 0px 0px 0px 4px #FFF;
    }
  }
}
</style>

<i18n>
{
  "ru": {
    "alert":"К сожалению, программа передач на выбранную дату временно отсутствует."
  },
  "by": {
    "alert":"Нажаль, праграма перадач на абраную дату часова адсутнічае."
  }
}
</i18n>