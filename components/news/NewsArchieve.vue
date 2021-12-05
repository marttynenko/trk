<template>
  <div class="archieve-block ui-block">
    <div class="archieve-block-toggler" 
      @click.prevent="isActive = !isActive"
    >
      Архив новостей
      <iconCalendar/>
    </div>

    <div class="archieve-block-body"
      v-if="isActive"
    >
      тут будет календарь
    </div>
  </div>
</template>

<script>
import iconCalendar from '@/assets/images/icons/calendar.svg'

export default {
  components: {
    iconCalendar
  },

  data() {
    return {
      isActive: false
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