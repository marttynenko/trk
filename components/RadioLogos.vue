<template>
  <div class="radios-list">
    <span class="radios-toggler" @click.prevent="toggleRadios" :class="{opened: isDrop}">
      <span class="radios-item">
        <img src="/images/Radio1.png" alt="радио 1">
      </span>
    </span>
    <span class="radios-list-drop" :class="{opened: isDrop}">
      <a href="//radiogomelplus.by/" class="radios-item" target="_blank">
        <img src="/images/Radio1.png" alt="радио 1">
      </a>
      <a href="//www.radiogomelfm.by/" class="radios-item" target="_blank">
        <img src="/images/Radio2.png" alt="радио 2">
      </a>
      <span class="radios-item">
        <img src="/images/Radio3.png" alt="радио 3">
      </span>
    </span>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDrop: false
    }
  },

  methods: {
    toggleRadios() {
      this.isDrop = !this.isDrop
    }
  }
}
</script>

<style lang="scss">
.radios {
  &-toggler {
    display: none;
  }
  &-list {
    position: relative;
    font-size: 0;
    white-space: nowrap;

    &-drop {
      display: flex;
    }
  }
  &-item {
    margin-right: 20px;
    height: 55px;
    display: flex;
    align-items: center;

    img {
      max-height: 55px;
    }
  }

  @media (max-width: 1580px) {
    &-item {
      margin-right: 10px;
    }
  }

  @media (max-width: 1240px) {
    &-list-drop {
      justify-content: flex-end;
    }
  }

  @media (max-width: 533px) {
    &-item {
      margin-right: 0px;
      margin-left: -7px;
      transform: scale(0.75);
    }
  }

  @media (max-width: 480px) {
    &-item {
      height: 45px;

      img {
        max-height: 45px;
      }
    }
  }

  @media (max-width: 420px) {
    &-toggler {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 10px;

      .radios-item {
        margin: 0;
        display: flex;
        align-items: center;
      }
      &:after {
        content: "";
        position: absolute;
        right: 0;
        top: 50%;
        width: 10px;
        height: 10px;
        margin-top: -5px;
        background: url(@/assets/images/toggler-black.svg?inline) center no-repeat;
        background-size: contain;
        transition: transform .15s;
      }
      &.opened {
        &:after {
          transform: rotate(180deg);
        }
      }
    }
    &-list-drop {
      position: absolute;
      top: 100%;
      right: 0px;
      padding: 10px 10px 0px;
      background: #FFF;
      z-index: 9;
      text-align: center;
      display: none;

      &.opened {
        display: block;
      }
      .radios-item {
        height: auto;
      }
    }
    &-item {
      display: block;
      margin: 0px auto 10px;
    }
  }
}
</style>