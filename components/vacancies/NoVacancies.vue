<template>
  <div class="no-vacancies">
    <img src="/images/no-vacancies.png" alt="нет вакансий" class="no-vacancies-img">
    <div class="no-vacancies-txt">
      <div class="no-vacancies-title">К сожалению, пока нет актуальных вакансий</div>
      <div class="no-vacancies-later">Проверьте позже</div>
    </div>
  </div>
</template>

<style lang="scss">
.no-vacancies {
  position: relative;
  margin-bottom: 100px;
  text-align: center;

  &-img {
    display: block;
    margin: 0 auto;
  }
  &-txt {
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translate(0,-50%);
  }
  &-title {
    @include fz(36);
    font-weight: 600;
    margin-bottom: 20px;
  }
  &-later {
    @include fz(20);
    font-weight: 600;
  }
}
</style>