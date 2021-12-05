<template>
  <div class="onair">
    <div class="inner-wide">
      <div class="onair-header flex valign-center align-justify">
        <h4 class="onair-header-title">В эфире</h4>
        <a href="#" class="ui-btn">Смотреть все проекты</a>
      </div>

      <div class="row">
        <div class="col-lg-3 col-xs-6">
          <div class="onair-card">
            <div class="onair-card-img ui-video">
              <img src="//via.placeholder.com/359x202" alt="alt">
            </div>
            <div class="onair-card-string flex valign-baseline align-justify">
              <div class="onair-card-theme">Классный час</div>
              <div class="onair-card-date">19:45 | 19 июля</div>
            </div>

            <div class="onair-card-title">Премьеру спектакля “Ганди молчал по субботам” представил Гомельский облдрамтеатр</div>
          </div>
        </div>

        <div class="col-lg-3 col-xs-6">
          <div class="onair-card">
            <div class="onair-card-img ui-video">
              <img src="//via.placeholder.com/359x202" alt="alt">
            </div>
            <div class="onair-card-string flex valign-baseline align-justify">
              <div class="onair-card-theme">Точка зрения</div>
              <div class="onair-card-date">17:25 | 19 июля</div>
            </div>

            <div class="onair-card-title">“На этюды” Выставка пастелей Олега Белоусова открыта в Гомеле</div>
          </div>
        </div>

        <div class="col-lg-3 col-xs-6">
          <div class="onair-card">
            <div class="onair-card-img ui-video">
              <img src="//via.placeholder.com/359x202" alt="alt">
            </div>
            <div class="onair-card-string flex valign-baseline align-justify">
              <div class="onair-card-theme">Портреты</div>
              <div class="onair-card-date">19:45 | 19 июля</div>
            </div>

            <div class="onair-card-title">Премьеру спектакля “Ганди молчал по субботам” представил Гомельский облдрамтеатр</div>
          </div>
        </div>

        <div class="col-lg-3 col-xs-6">
          <div class="onair-card">
            <div class="onair-card-img ui-video">
              <img src="//via.placeholder.com/359x202" alt="alt">
            </div>
            <div class="onair-card-string flex valign-baseline align-justify">
              <div class="onair-card-theme">Большая стирка</div>
              <div class="onair-card-date">19:45 | 19 июля</div>
            </div>

            <div class="onair-card-title">Премьеру спектакля “Ганди молчал по субботам” представил Гомельский облдрамтеатр</div>
          </div>
        </div>

        
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.onair {
  background: #282828;
  padding-top: 75px;
  padding-bottom: 70px;
  color: #FFF;

  &-header {
    margin-bottom: 35px;

    &-title {
      @include fz(36);
      margin: 0;
    }
  }

  &-card {
    margin-bottom: 35px;

    &-img {
      padding: 20px;
      border: 2px solid $primary;
      border-radius: 6px;
      margin-bottom: 25px;
      position: relative;

      img {
        display: block;
        margin: 0 auto;
        border-radius: 6px;
        width: auto;
      }
    }

    &-string {
      margin-bottom: 15px;
    }

    &-theme {
      font-weight: 600;
      color: $primary;
      @include fz(16);
    }

    &-title {
      @include fz(14);
      font-weight: 600;
    }

    &-date {
      @include fz(14);
    }
  }

  @media (max-width: 576px) {
    padding-top: 35px;
    padding-bottom: 30px;
  }

  @media (max-width: 420px) {
    &-header {
      display: block;
      margin-bottom: 25px;

      &-title {
        margin-bottom: 8px;
      }
    }
  }

}
</style>