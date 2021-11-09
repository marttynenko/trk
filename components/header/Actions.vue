<template>
  <div class="header-actions">
    <div class="header-action header-action-search"></div>
    <div class="header-action header-action-eye"></div>
    <div class="header-action header-action-langs">
      <div class="header-action-langs-current">Рус</div>
      <div class="header-action-langs-list">
        <div class="header-action-langs-lang">Рус</div>
        <div class="header-action-langs-lang">Бел</div>
      </div>
    </div>
  </div>
</template>

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
      background: url(@/assets/images/glass.svg) center no-repeat;
      background-size: 14px;
    }

    &-eye {
      width: 18px;
      height: 18px;
      background: url(@/assets/images/eye.svg) center no-repeat;
      background-size: contain;
    }

    &-langs {
      margin-right: 0;

      &-current {
        height: 24px;
        line-height: 24px;
        display: inline-block;
        vertical-align: middle;
        padding: 0px 18px 0px 8px;
        border-radius: 3px;
        background: $black;
        color: #FFF;

        &:after {
          content: "";
          position: absolute;
          right: 6px;
          top: 50%;
          margin-top: -4px;
          width: 8px;
          height: 8px;
          background: url(@/assets/images/toggler.svg) center no-repeat;
          background-size: contain;
        }
      }

      &-list {
        position: absolute;
        visibility: hidden;
        top: 100%;
        left: 0;
        min-width: 100%;
        background: $black;
      }
    }
  }
}
</style>