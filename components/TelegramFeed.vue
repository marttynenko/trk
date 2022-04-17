<template>
  <div class="ui-block telegram-feed">

    <div class="telegram-feed-header">
      <span class="telegram-feed-header-logo"></span>
      <span class="telegram-feed-header-txt">ТРК Гомель в</span>
      <a href="//t.me/trkgomel" class="telegram-feed-header-telegram">Telegram</a>
    </div>

    <div class="telegram-feed-wrp">
      <div class="telegram-feed-shadow"></div>
      <iframe class="telegram-feed-vidget" style="border:0px;height:480px;width:100%;margin:0px auto;" src="https://xn--r1a.website/s/trkgomel"></iframe>
    </div>
    
  </div>
</template>


<style lang="scss">
.telegram-feed {
  &-wrp {
    position: relative;
  }
  &-shadow {
    position: absolute;
    right: 0px;
    top: 0;
    height: 48px;
    width: 200px;
    min-width: 55%;
    background: linear-gradient(90deg, rgba(255,255,255,0), #FFF 20%);
  }
  &-header {
    position: relative;
    display: inline-block;
    margin-right: 10px;
    padding: 0px 15px;
    border: 1px solid #EB9139;
    border-bottom: 0;
    border-radius: 4px 4px 0px 0px;
    height: 54px;
    line-height: 54px;
    font-weight: 600;
    @include fz(16);

    &-telegram {
      display: inline-block;
      position: relative;
      padding-left: 30px;
      color: #2E93C3;

      &:hover {
        color: darken(#2E93C3,10%);
      }

      &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -12px;
        width: 24px;
        height: 24px;
        background: url(@/assets/images/icons/telegram.svg?inline) center no-repeat;
        background-size: contain;
        fill: #2E93C3;
      }
    }

    &:after {
      content: "";
      position: absolute;
      right: -1px;
      bottom: 0;
      width: 1px;
      height: 15px;
      background: $bg;
      z-index: 1;
    }
  }

  &-body {
    background: #FFF;
    padding: 25px 30px;
    border-radius: 6px;
    @include fz(16);
    height: 480px;

    .ui-scroller {
      max-height: 430px;
    }
  }

  @media (max-width: 1440px) {
    &-body {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  @media (max-width: 576px) {
    &-body {
      height: 350px;
      padding: 20px;
    }
    &-body .ui-scroller {
      max-height: 310px !important;
    }
  }
}
</style>