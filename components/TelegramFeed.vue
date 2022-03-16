<template>
  <div class="ui-block telegram-feed">

    <div class="telegram-feed-header">
      <span class="telegram-feed-header-logo"></span>
      <span class="telegram-feed-header-txt">ТРК Гомель в</span>
      <span class="telegram-feed-header-telegram">Telegram</span>
    </div>

    <iframe class="telegram-feed-vidget" style="border:0px;height:480px;width:100%;margin:0px auto;" src="https://xn--r1a.website/s/trkgomel"></iframe>
    <!-- <div class="telegram-feed-body">
      <div class="ui-scroller">
        Открытка из Чили прибыло в графство Англии через 30 лет
<br><br>
Речь идёт об открытке, которую британец Нил Крокер отправил своему тестю в 1991 году, во время службы в Королевском флоте. Судно, на котором служил Крокер, возвращалось из трехмесячного путешествия по Фолклендским островам и остановилось на пять дней в чилийском портовом городе Вальпараисо. <br><br>
По словам мужчины, он «смутно помнит», как отправлял открытку, но в ней он указал, что «погода и пляжи прекрасные». «Я отправил домой 
<br><br>
Открытка из Чили прибыло в графство Англии через 30 лет
<br><br>
Речь идёт об открытке, которую британец Нил Крокер отправил своему тестю в 1991 году, во время службы в Королевском флоте. Судно, на котором служил Крокер, возвращалось из трехмесячного путешествия по Фолклендским островам и остановилось на пять дней в чилийском портовом городе Вальпараисо. 
<br><br>
По словам мужчины, он «смутно помнит», как отправлял открытку, но в ней он указал, что «погода и пляжи прекрасные». «Я отправил домой 
      </div>
    </div> -->
  </div>
</template>


<style lang="scss">
.telegram-feed {
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