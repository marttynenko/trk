<template>
  <div class="program">
    <div class="program-item">
      <div class="program-item-time">08:00</div>
      <div class="program-item-line"></div>
      <div class="program-item-info">
        <div class="program-item-name">Новости</div>
      </div>
    </div>

    <div class="program-item program-item-onair">
      <div class="program-item-time">08:30</div>
      <div class="program-item-line"></div>
      <div class="program-item-info">
        <div class="program-item-name">"Cамая моя Гомельщина"</div>
        <div class="program-item-details">2 серия 3 сезон</div>
      </div>
    </div>

    <div class="program-item">
      <div class="program-item-time">10:00</div>
      <div class="program-item-line"></div>
      <div class="program-item-info">
        <div class="program-item-name">Черное зеркало</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.program-item {
  display: flex;
  position: relative;
  padding: 0px 15px;
  color: #cbcbcb;

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