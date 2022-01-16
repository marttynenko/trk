<template>
  <footer class="footer" id="footer">
    <ToSubscribe />
    
    <div class="footer-main">
      <div class="inner-wide">
        <div class="row">
          <div class="col-footer-logo">
            <div class="footer-logo-rights">
              <div class="footer-logo"><NuxtLink to="/"><img src="/images/logo-footer.png" alt="Телерадиокомпания Гомель"></NuxtLink></div>

              <div class="footer-copyrights">{{$t('name')}}</div>
            </div>
          </div>

          <div class="col-footer-menu">
            <ul class="footer-menu">
              <!-- <li><nuxt-link to="/about">О нас</nuxt-link></li>
              <li><nuxt-link to="/keythemes">Спецпроекты</nuxt-link></li>
              <li><nuxt-link to="/reklama">Реклама и услуги</nuxt-link></li>
              <li><nuxt-link to="/podcasts">Подкасты</nuxt-link></li>
              <li><nuxt-link to="/schedule">Телепрограмма</nuxt-link></li>
              <li><nuxt-link to="/news">Новости</nuxt-link></li> -->
              <li>
                <NuxtLink :to="localePath('/about')">{{$t('about')}}</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/shows')">{{$t('specials')}}</NuxtLink>
              </li>
              
              <li>
                <NuxtLink :to="localePath('/reklama')">{{$t('reklama')}}</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/podcasts')">{{$t('podcasts')}}</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/schedule')">{{$t('tv')}}</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/news')">{{$t('news')}}</NuxtLink>
              </li>
            </ul>

            <div class="footer-radios">
              <RadioLogos />
            </div>
          </div>

          <div class="col-footer-adres">
            <div class="footer-title">{{$t('adressTitle')}}</div>
            <div class="footer-adres">{{$t('adress')}}</div>
          </div>

          <div class="col-footer-contacts">
            <div class="footer-title">{{$t('contactsTitle')}}</div>
            <div class="footer-contacts">
              <div class="footer-phones">(0232) 34-26-78, <br> (0232) 34-27-68 (факс)</div>
              <div class="footer-mail"><a href="mailto:sekretar@tvrgomel.by">sekretar@tvrgomel.by</a></div>
            </div>
          </div>

          <div class="col-footer-map">
            <div class="footer-map">
              <nuxt-link :to="localePath('/about/contacts')">
                <img src="/images/footer-map.jpeg" alt="мы на карте">
              </nuxt-link>
            </div>

            <div class="footer-develop">
              <div class="footer-develop-what">{{$t('verstka')}}</div>
              <a href="//www.farba-studio.com/ru/" class="footer-develop-link" target="_blank">Farba Studio</a>
            </div>
          </div>

        </div><!--.row-->
      </div>
    </div><!--.footer-main-->

    <div class="footer-coping">
      <div class="inner-wide">{{$t('copy')}}</div>
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
    background: url(~/assets/images/icons/pin.svg?inline) left 0px no-repeat;
    background-size: 20px;
  }

  &-phones,
  &-mail {
    padding-left: 30px;
  }

  &-phones {
    background: url(~/assets/images/icons/phone.svg?inline) left 0px no-repeat;
    background-size: 20px;
    margin-bottom: 10px;
  }

  &-mail {
    background: url(~/assets/images/icons/mail.svg?inline) left 2px no-repeat;
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
        background: url(~/assets/images/icons/farba.png?inline) center no-repeat;
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

<i18n>
{
  "ru": {
    "name": "Телерадиокомпания «Гомель». © 2021 Все права защищены.",
    "news": "Новости",
    "specials": "Спецпроекты",
    "tv": "Телепрограмма",
    "podcasts": "Подкасты",
    "reklama": "Реклама и услуги",
    "about": "О компании",
    "adressTitle": "Адресс компании",
    "adress": "ул. Пушкина, 8, г.Гомель, 246050, Республика Беларусь.",
    "contactsTitle": "Контакты",
    "copy": "*При любом использовании материалов активная гиперссылка на tvrgomel.by обязательна. Пользуясь сайтом, вы соглашаетесь с условиями политики конфиденциальности.",
    "verstka": "Верстка и программирование:"
  },
  "by": {
    "name": "Тэлерадыёкампанія «Гомель». © 2021 Усе правы абаронены.",
    "news": "Навiны",
    "specials": "Спецпраекты",
    "tv": "Праграмма перадач",
    "podcasts": "Падкасты",
    "reklama": "Рэклама i паслугi",
    "about": "Пра нас",
    "adressTitle": "Адрас кампаніі",
    "adress": "вул. Пушкіна, 8, г.Гомель, 246050, Рэспубліка Беларусь",
    "contactsTitle": "Кантакты",
    "copy": "*Пры любым выкарыстанні матэрыялаў актыўная гіперспасылка на tvrgomel.by абавязковая. Карыстаючыся сайтам, вы пагаджаецеся з умовамі палітыкі прыватнасці.",
    "verstka": "Вёрстка і праграмаванне:"
  }
}
</i18n>