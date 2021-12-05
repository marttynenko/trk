<template>
  <div class="vidgets">
    <div class="vidgets-item">-1°C</div>
    <div class="vidgets-item">USD 2.54</div>
    <div class="vidgets-item">EUR 2.88</div>
    <div class="vidgets-item">RUB 3.44</div>
  </div>
</template>

<style lang="scss" scoped>
  .vidgets {
    white-space: nowrap;
    border-left: 1px solid rgba(#FFF,.15);

    &-item {
      display: inline-block;
      vertical-align: top;
      padding: 0px 10px;
      height: 26px;
      line-height: 26px;
      border-right: 1px solid rgba(#FFF,.15);
    }
  }
</style>