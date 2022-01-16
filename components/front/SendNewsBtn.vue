<template>
  <span class="purpose-news-btn" @click.prevent="showPopup"><span class="purpose-news-btn-txt">Прислать новость</span></span>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  methods: {
    ...mapMutations({
      changePopup: 'popups/updatePopup',
      openPopup: 'popups/openPopup',
    }),

    showPopup() {
      this.changePopup('PopupNews')
      this.openPopup()
    }
  }
}
</script>

<style lang="scss">
.purpose-news-btn {
  display: inline-block;
  position: relative;
  height: 36px;
  line-height: 36px;
  padding-left: 46px;
  text-transform: uppercase;
  font-weight: 600;
  color: #FFF;
  cursor: pointer;
  
  &:hover {
    color: $primary;
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -18px;
    width: 36px;
    height: 36px;
    background: url(@/assets/images/icons/purpose-news.svg?inline) center no-repeat;
    background-size: contain;
  }

  @media (max-width: 1600px) and (min-width: 1140px) {
    &-txt {
      display: flex;
      height: 36px;
      align-items: center;
      width: 70px;
      white-space: normal;
      line-height: 1.2;
      text-transform: none;
    }
  }
}
</style>