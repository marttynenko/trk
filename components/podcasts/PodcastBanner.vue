<template>
  <div class="podcast-banner">
    <div class="inner">
      <div class="row valign-center">
        <div class="col-lg-6 col-md-8">
          <div class="podcast-banner-data">
            <div class="podcast-banner-btn">
              <span class="ui-btn">Прорыв</span>
            </div>

            <div class="podcast-banner-title">Ольга Кравцова: голос за кадром</div>

            <div class="podcast-banner-txt">
              - как устроена индустрия озвучки сериалов (легальная и нелегальная);<br><br>
              - как попасть в озвучку и сколько на этом можно заработать;<br><br>
              - как блоггинг влияет на отношения с людьми в режиме "оффлайн"<br><br>
              - как научиться продвигать свои услуги в инстаграм с нуля.
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-md-4">
          <div class="podcast-banner-img">
            <img src="/images/temp/podcast-banner.png" loading="lazy" alt="alt">
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="scss">
.podcast-banner {
  margin-top: -30px;
  margin-bottom: 30px;
  padding-top: 40px;
  padding-bottom: 50px;
  background: #282828;
  color: #FFF;
  @include fz(16);

  &-btn {
    margin-bottom: 30px;
  }
  &-title {
    @include fz(50);
    font-weight: 700;
    margin-bottom: 30px;
    color: $primary;
  }
  &-img {
    text-align: center;
  }

  @media (max-width: 992px) {
    &-data {
      margin-bottom: 40px;
    }
  }

  @media (max-width: 768px) {
    &-title {
      @include fz(40);
    }
  }
  @media (max-width: 576px) {
    &-title {
      @include fz(30);
    }
  }
}
</style>