<template>
  <div class="schedule-banner">
    <img src="/images/schedule-banner.jpg" alt="" class="schedule-banner-img">

    <div class="inner">
      <div class="schedule-banner-body">
        <div class="schedule-banner-btn">
          <span class="ui-btn">Премьера</span>
        </div>
        <div class="schedule-banner-title">Том и Джерри</div>
        <div class="schedule-banner-when">
          <div class="schedule-banner-when-time">12:00</div>
          <div class="schedule-banner-when-days">Понедельник - пятница</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.schedule-banner {
  padding-top: 40px;
  padding-bottom: 70px;
  max-width: 1850px;
  margin: -30px auto 30px;
  position: relative;
  height: 550px;
  color: #E9E9E9;

  .inner {
    position: relative;
    height: 100%;
  }

  &-img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
  }
  &-body {
    width: 480px;
    max-width: 100%;
  }
  &-btn {
    margin-bottom: 30px;
  }
  &-title {
    @include fz(50);
    line-height: 1.15;
    font-weight: 700;
    margin-bottom: 30px;
  }
  &-when {
    position: absolute;
    left: 35px;
    bottom: 0px;
    display: flex;
    align-items: center;
    font-weight: 600;
    @include fz(18);

    &-time {
      margin-right: 15px;
      @include fz(50)
    }
    &-days {
      max-width: 150px;
      line-height: 1.15;
    }
  }
}
</style>