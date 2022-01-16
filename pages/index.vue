<template>
  <div class="front-page">
    <div class="topblock">
      <div class="topblock-head">
        <KeyThemes />

        <div class="topblock-head-right">
          <div class="topblock-head-news">
            <SendNewsBtn />
          </div>

          <div class="topblock-head-vidgets">
            <Vidgets />
          </div>
        </div>
      </div>

      <div class="topblock-body flex">
        <div class="topblock-news">
          <MainNews />
          <ActualNews />
        </div>

        <div class="topblock-banner">
          <img class="topblock-banner-img" src="/images/banners/banner-topblock.png" alt="banner" loading="lazy">
        </div>
      </div>
    </div><!--.topblock-->

    <div class="ui-banner ui-banner-wide">
      <img src="/images/banners/banner-wide-1.jpg" alt="banner" loading="lazy">
    </div>

    <div class="front-cols">
      <div class="inner-wide">
        <div class="row">
          <div class="col-lg-3 col-xs-6">
            <LastNews />
          </div>
          <div class="col-lg-3 col-xs-6">
            <WorldNews />
          </div>
          <div class="col-lg-3 col-xs-6">
            <Podcasts />
          </div>
          <div class="col-lg-3 col-xs-6">
            <ReadNow :blockHeight="550" />
          </div>
        </div>
      </div>
    </div>

    <div class="ui-banner ui-banner-wide">
      <img src="/images/banners/banner-wide-1.jpg" alt="banner" loading="lazy">
    </div>

    <div class="front-cols">
      <div class="inner-wide">
        <div class="h1 front-cols-title">Последние выпуски новостей</div>
        <div class="row">

          <div class="col-lg-6 col-sm-12">
            <LastEditions />
          </div>

          <div class="col-lg-3 col-sm-6">
            <TelegramFeed />
          </div>

          <div class="col-lg-3 col-sm-6">
            <div class="tempory-banners">
              <div class="tempory-banners-header"></div>

              <div class="tempory-banners-body">
                <div class="tempory-banners-banner">
                  <img src="/images/banners/b1.jpg" alt="alt">
                </div>

                <div class="tempory-banners-banner">
                  <img src="/images/banners/b2.jpg" alt="alt">
                </div>

                <div class="tempory-banners-banner">
                  <img src="/images/banners/b1.jpg" alt="alt">
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>

    <OnAir />
    <ActualCarousel />
    <Projects />
    
  </div><!--.front-page-->
</template>

<script>
import KeyThemes from '~/components/front/KeyThemes.vue'
import Vidgets from '~/components/front/Vidgets.vue'
import MainNews from '~/components/front/MainNews.vue'
import ActualNews from '~/components/front/NewsCarousel.vue'
import LastNews from '~/components/front/LastNews.vue'
import WorldNews from '~/components/front/WorldNews.vue'
import Podcasts from '~/components/front/Podcasts.vue'
import ReadNow from '~/components/news/ReadNow.vue'
import LastEditions from '~/components/front/LastEditions.vue'
import TelegramFeed from '~/components/TelegramFeed.vue'
import OnAir from '~/components/front/OnAir.vue'
import ActualCarousel from '~/components/front/ActualCarousel.vue'
import Projects from '~/components/front/Projects.vue'
import SendNewsBtn from '~/components/front/SendNewsBtn.vue'

export default {
  // layout: 'front',

  components: {
    KeyThemes,
    Vidgets,
    MainNews,
    ActualNews,
    LastNews,
    WorldNews,
    Podcasts,
    ReadNow,
    LastEditions,
    TelegramFeed,
    OnAir,
    ActualCarousel,
    Projects,
    SendNewsBtn
  }
}
</script>

<style lang="scss">
.topblock {
  max-width: 1920px;
  margin: -30px auto 0;
  background-color: #282828;
  color: #FFF;

  &-head {
    padding: 25px 65px;
    border-bottom: 1px solid #555;
    @include fz(14);
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-right {
      white-space: nowrap;
      margin-bottom: 5px;
    }

    &-news {
      display: inline-block;
      vertical-align: middle;

      &:not(:last-child) {
        margin-right: 35px;
      }
    }

    &-vidgets {
      display: inline-block;
      vertical-align: middle;
    }
  }

  &-news {
    flex: 0 0 calc(100% - 350px);
    max-width: calc(100% - 350px);
  }
  &-banner {
    flex: 0 0 350px;
    max-width: 350px;
    position: relative;
    overflow: hidden;

    &-img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      min-width: 100%;
      min-height: 100%;
      max-width: 150%;
    }
  }

  @media (max-width: 1440px) {
    &-head {
      padding-left: 35px;
      padding-right: 35px;
    }
  }

  @media (max-width: 1140px) {
    &-news {
      flex: 0 0 100%;
      max-width: 100%;
    }
    &-banner {
      display: none;
      visibility: hidden;
    }
    &-head {
      display: block;
      padding-top: 18px;
      padding-bottom: 18px;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    &-head-right {
      display: none;
    }
  }

  @media (max-width: 576px) {
    &-head {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
}

.front-cols {
  padding-top: 45px;
  padding-bottom: 50px;

  @media (max-width: 1690px) {
    .ui-block-header {

      &-title {
        float: none;
        margin-bottom: 10px;
        padding-right: 0;
      }
      &-btn {
        float: none;
        margin-top: 0;
      }
    }
  }

  @media (max-width: 1690px) and (min-width: 576px) {
    .read-now {  
      .ui-block-title {
        min-height: 66px;
      }
    }
  }

  @media (max-width: 576px) {
    padding-top: 15px;
    padding-bottom: 20px;
  }
}

.tempory-banners {

  &-header {
    height: 54px;
  }
  img {
    display: block;
    line-height: 0;
  }
  @media (min-width: 768px) {
    &-body {
      height: 480px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
  }
  @media (max-width: 768px) {
    text-align: center;

    &-header {
      height: 0;
    }
    &-body {
      height: auto;
    }
    &-banner {
      margin-bottom: 10px;
      display: inline-block;
    }
  }
}
</style>
