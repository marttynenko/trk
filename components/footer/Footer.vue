<template>
  <footer class="footer" id="footer">
    <ToSubscribe />
    
    <div class="footer-main">
      <div class="inner-wide">
        <div class="row">
          <div class="col-footer-logo">
            <div class="footer-logo-rights">
              <div class="footer-logo"><a href=""><img src="images/logo-footer.png" alt="Телерадиокомпания Гомель"></a></div>

              <div class="footer-copyrights">«Телерадиокомпания «Гомель». © 2021 Все права защищены.</div>
            </div>
          </div>

          <div class="col-footer-menu">
            <ul class="footer-menu">
              <li><a href="#">О нас</a></li>
              <li><a href="#">Спецпроекты</a></li>
              <li><a href="#">Реклама и услуги</a></li>
              <li><a href="#">Подкасты</a></li>
              <li><a href="#">Телепрограмма</a></li>
              <li><a href="#">Новости</a></li>
            </ul>

            <div class="footer-radios">
              <RadioLogos />
            </div>
          </div>

          <div class="col-footer-adres">
            <div class="footer-title">Адрес компании</div>
            <div class="footer-adres">
              ул. Пушкина, 8,<br>г.Гомель, 246050,<br> Республика Беларусь.
            </div>
          </div>

          <div class="col-footer-contacts">
            <div class="footer-title">Контакты</div>
            <div class="footer-contacts">
              <div class="footer-phones">(0232) 34-26-78, <br> (0232) 34-27-68 (факс)</div>
              <div class="footer-mail"><a href="mailto:sekretar@tvrgomel.by">sekretar@tvrgomel.by</a></div>
            </div>
          </div>

          <div class="col-footer-map">
            <div class="footer-map">
              <a href="#">
                <img src="images/footer-map.jpeg" alt="мы на карте">
              </a>
            </div>

            <div class="footer-develop">
              <div class="footer-develop-what">Верстка и программирование:</div>
              <a href="#" class="footer-develop-link" target="_blank">Farba Studio</a>
            </div>
          </div>

        </div><!--.row-->
      </div>
    </div><!--.footer-main-->

    <div class="footer-coping">
      <div class="inner-wide">*При любом использовании материалов активная гиперссылка на <nuxt-link to="/">tvrgomel.by</nuxt-link> обязательна. Пользуясь сайтом, вы соглашаетесь с условиями политики конфиденциальности.</div>
    </div>
    
  </footer>
</template>

<script>
import ToSubscribe from './ToSubscribe.vue'
import RadioLogos from '~/components/RadioLogos.vue'

export default {
  components: {
    ToSubscribe, RadioLogos
  }
}
</script>


<style lang="scss">
footer.footer {
  background-color: $font_titles;
  color: #E9E9E9;
  @include fz(15);

  a {
    color: #E9E9E9;

    &:hover {
      color: $primary;
    }
  }
}

.footer {
  &-main {
    padding-top: 120px;
    padding-bottom: 30px;
    border-bottom: 1px solid #5a5a5c;
  }

  &-coping {
    padding: 45px 0;
    @include fz(14);
  }

  &-logo {
    margin-bottom: 50px;
  }

  &-menu {
    font-size: 0;
    margin-bottom: 50px;

    li {
      display: inline-block;
      vertical-align: top;
      width: 50%;
      padding-right: 15px;
      margin-bottom: 20px;
      @include fz(15);
    }
    a {
      text-transform: uppercase;
      font-weight: 700;
    }
  }

  &-title {
    margin-bottom: 10px;
    @include fz(20);
    font-weight: 600;
    text-transform: uppercase;
  }

  &-adres {
    padding-left: 30px;
    background: url(~/assets/images/icons/pin.svg) left 0px no-repeat;
    background-size: 20px;
  }

  &-phones,
  &-mail {
    padding-left: 30px;
  }

  &-phones {
    background: url(~/assets/images/icons/phone.svg) left 0px no-repeat;
    background-size: 20px;
    margin-bottom: 10px;
  }

  &-mail {
    background: url(~/assets/images/icons/mail.svg) left 2px no-repeat;
    background-size: 20px;
    margin-bottom: 10px;
  }

  &-map {
    margin-bottom: 10px;
  }

  &-develop {
    margin-bottom: 10px;

    &-what {
      @include fz(14);
      font-weight: 700;
      margin-bottom: 10px;
    }
    &-link {
      display: inline-block;
      position: relative;
      padding-left: 26px;

      &:before {
        content: "";
        position: absolute;
        left: 0;
        top: -6px;
        width: 16px;
        height: 24px;
        background: url(~/assets/images/icons/farba.png) center no-repeat;
        background-size: contain;
      }
    }
  }

  @media (max-width: 1240px) {
    &-main {
      padding-top: 60px;
    }

    &-logo {
      img {
        width: 150px;
        max-width: 100%;
      }
    }

    &-copyrights {
      width: 240px;
      max-width: 100%;
    }

    &-logo {
      margin-bottom: 25px;
    }

    &-menu {
      margin-bottom: 10px;
    }

    // &-logo-rights {
    //   display: flex;
    //   align-items: center;
    //   margin: 0 auto 45px;
    // }

    // &-logo {
    //   max-width: 130px;
    //   margin-right: 30px;
    //   margin-bottom: 0;
    // }
    
    // &-copyrights {
    //   width: 250px;
    //   max-width: 100%;
    // }
  }

  @media (max-width: 768px) {
    &-logo-rights {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &-logo {
      max-width: 110px;
      margin-right: 30px;
      margin-bottom: 0;
    }
    
    &-copyrights {
      width: 250px;
      max-width: 100%;
    }

    &-menu {
      margin-bottom: 20px;
    }
  }

  @media (max-width: 576px) {

    &-title {
      @include fz(16);
    }
    &-coping {
      padding-top: 30px;
      padding-bottom: 30px;
    }
  }


  @media (max-width: 420px) {
    &-logo {
      margin-right: 15px;
    }
    &-menu {
      li {
        @include fz(13);
      }
    }
  }
}


.col-footer {
  &-logo,
  &-adres,
  &-contacts,
  &-map {
    flex: 0 0 16.667%;
    max-width: 16.667%;
  }

  &-menu {
    flex: 0 0 33.33%;
    max-width: 33.33%;
  }

  @media (max-width: 1240px) {
    // &-logo {
    //   flex: 0 0 100%;
    //   max-width: 100%;
    // }

    // &-menu {
    //   flex: 0 0 35%;
    //   max-width: 35%;
    // }

    // &-adres,
    // &-contacts,
    // &-map {
    //   flex: 0 0 21.66%;
    //   max-width: 21.66%;
    // }

    &-logo {
      flex: 0 0 33.33%;
      max-width: 33.33%;
      margin-bottom: 40px;
    }

    &-menu {
      flex: 0 0 66.66%;
      max-width: 66.66%;
      margin-bottom: 40px;
    }

    &-adres,
    &-contacts,
    &-map {
      flex: 0 0 33.33%;
      max-width: 33.33%;
    }
  }

  @media (max-width: 768px) {
    &-logo,
    &-menu,
    &-map {
      flex: 0 0 100%;
      max-width: 100%;
    }

    &-adres,
    &-contacts {
      flex: 0 0 50%;
      max-width: 50%;
      margin-bottom: 40px;
    }
  }
  
  @media (max-width: 420px) {
    &-adres,
    &-contacts {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
}
</style>