<template>
  <div class="subscribe">
    <div class="inner-wide">
      <div class="subscribe-title">Подписаться</div>
      <div class="subscribe-list">
        <div class="subscribe-col">
          <a href="#" class="subscribe-link subscribe-link-youtube" target="_blank"></a>
        </div>
        <div class="subscribe-col">
          <a href="#" class="subscribe-link subscribe-link-telegram" target="_blank"></a>
        </div>
        <div class="subscribe-col">
          <a href="#" class="subscribe-link subscribe-link-instagram" target="_blank"></a>
        </div>
        <div class="subscribe-col">
          <a href="#" class="subscribe-link subscribe-link-vk" target="_blank"></a>
        </div>
        <div class="subscribe-col">
          <a href="#" class="subscribe-link subscribe-link-facebook" target="_blank"></a>
        </div>
        <div class="subscribe-col">
          <a href="#" class="subscribe-link subscribe-link-odnoklassniki" target="_blank"></a>
        </div>
        <div class="subscribe-col">
          <a href="#" class="subscribe-link subscribe-link-tiktok" target="_blank"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.subscribe {
  background: #E8E8E8;
  padding: 38px 0px 20px;

  &-title {
    margin-bottom: 30px;
    font-weight: 600;
    @include fz(36);
    color: $font;
  }

  &-list {
    display: flex;
    margin-left: -8px;
    margin-right: -8px;
  }

  &-col {
    width: 100%;
    padding-left: 8px;
    padding-right: 8px;
  }

  &-link {
    display: block;
    height: 105px;
    height: clamp(65px, 11vh, 110px);
    border-radius: 9px;
    margin-bottom: 16px;
    background-color: #C4302B;
    color: #FFF;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: auto 50px;

    &-youtube {
      background-color: #C4302B;
      background-image: url(~/assets/images/subscribe/youtube.svg?inline);
      background-size: 46px;
    }
    &-telegram {
      background-color: #0088CC;
      background-image: url(~/assets/images/subscribe/telegram.svg?inline);
      background-size: auto 42px;
    }
    &-instagram {
      background-color: #a32fd3;
      background-image: url(~/assets/images/subscribe/instagram.svg?inline);
      background-size: 54px;
    }
    &-vk {
      background-color: #597DA3;
      background-image: url(~/assets/images/subscribe/vk.svg?inline);
      background-size: auto 35px;
    }
    &-facebook {
      background-color: #3B5998;
      background-image: url(~/assets/images/subscribe/facebook.svg?inline);
    }
    &-odnoklassniki {
      background-color: #ED812B;
      background-image: url(~/assets/images/subscribe/odnoklassniki.svg?inline);
    }
    &-tiktok {
      background-color: #0E0E0E;
      background-image: url(~/assets/images/subscribe/tiktok.svg?inline);
    }
  }

  @media (max-width: 1240px) {
    &-title {
      margin-bottom: 20px;
      @include fz(30);
    }

    &-link {
      background-size: auto 35px;

      &-vk {
        background-size: auto 28px;
      }
    }
  }

  @media (max-width: 769px) {
    &-title {
      margin-bottom: 15px;
      @include fz(24);
    }

    &-list {
      margin-right: -5px;
      margin-left: -5px;
    }

    &-col {
      padding-left: 5px;
      padding-right: 5px;
    }

    &-link {
      height: 50px;
      background-size: auto 25px;

      &-vk {
        background-size: auto 23px;
      }

      &-instagram {
        background-size: 38px;
      }
    }
  }

  @media (max-width: 420px) {
    &-list {
      margin-right: -2px;
      margin-left: -2px;
    }

    &-col {
      padding-left: 2px;
      padding-right: 2px;
    }

    &-link {
      height: 42px;
      background-size: auto 18px;

      &-vk {
        background-size: auto 17px;
      }

      &-instagram {
        background-size: 25px;
      }
    }
  }
}
</style>