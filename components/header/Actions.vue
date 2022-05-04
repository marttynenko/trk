<template>
  <div class="header-actions">
    <div class="header-action header-action-search" @click="openHandler"></div>
    <div class="header-action header-action-eye" :class="{active: viStatus}" @click="toggleVi"></div>
    <LangsToggler />
  </div>
</template>

<script>
import LangsToggler from './LangsToggler.vue'
import {mapMutations, mapGetters} from 'vuex'

export default {
  props: {
    openHandler: Function
  },

  components: {
    LangsToggler
  },

  computed: {
    ...mapGetters({viStatus: 'vi/getStatus'})
  },

  methods: {
    ...mapMutations({toggleVi: 'vi/toggleStatus'})
  }
}
</script>

<style lang="scss">
.header {
  &-actions {
    white-space: nowrap;
    font-size: 0;
  }

  &-action {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin-right: 25px;
    @include fz(14);
    cursor: pointer;

    &-search {
      width: 18px;
      height: 18px;
      background: url(@/assets/images/glass.svg?inline) center no-repeat;
      background-size: 14px;
    }

    &-eye {
      width: 18px;
      height: 18px;
      background: url(@/assets/images/eye.svg?inline) center no-repeat;
      background-size: contain;

      &.active {
        position: relative;

        &:after {
          content: "";
          position: absolute;
          left: -2px;
          right: -2px;
          top: 50%;
          margin-top: -1px;
          background: #000;
          height: 1.5px;
          transform: rotate(-30deg);
        }
      }
    }
  }

  @media (max-width: 1360px) {
    &-action {
      margin-right: 12px;
    }
  }
}
</style>