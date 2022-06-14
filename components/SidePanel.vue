<template>
  <div class="panel">
    <div class="panel-inner">
      <div class="panel-share">
        <a href="https://www.youtube.com/channel/UCmeQS-euSReIz2l_HlaaQ0Q" class="panel-share-link" rel="nofollow" target="_blank">
          <ytIcon/>
        </a>
        <a href="https://t.me/trkgomel" class="panel-share-link" rel="nofollow" target="_blank">
          <tlIcon/>
        </a>
        <a href="https://www.instagram.com/b4_gomel" class="panel-share-link" rel="nofollow" target="_blank">
          <inIcon/>
        </a>
        <a href="https://vk.com/bel4gomel" class="panel-share-link" rel="nofollow" target="_blank">
          <vkIcon/>
        </a>
        <a href="https://www.facebook.com/groups/bel4gomel" class="panel-share-link" rel="nofollow" target="_blank">
          <fbIcon/>
        </a>
        <a href="https://ok.ru/bel4gomel" class="panel-share-link" rel="nofollow" target="_blank">
          <okIcon/>
        </a>
        <a href="https://www.tiktok.com/@tvr_gomel" class="panel-share-link" rel="nofollow" target="_blank">
          <tkIcon/>
        </a>
      </div>

      <div class="panel-actions">
        <div class="panel-popup" @click.prevent="showPopup">
          <div class="panel-popup-icon"><wroteUs/></div>
          {{$t('btn')}}
        </div>
        <div class="panel-to-top" @click.prevent="toTop"><up/></div>
      </div>
    </div>
  </div>
</template>

<script>
import ytIcon from '~/assets/images/subscribe/youtube.svg'
import tlIcon from '~/assets/images/subscribe/telegram.svg'
import inIcon from '~/assets/images/subscribe/instagram.svg'
import vkIcon from '~/assets/images/subscribe/vk.svg'
import fbIcon from '~/assets/images/subscribe/facebook.svg'
import okIcon from '~/assets/images/subscribe/odnoklassniki.svg'
import tkIcon from '~/assets/images/subscribe/tiktok.svg'
import wroteUs from '~/assets/images/icons/wrote-us.svg'
import up from '~/assets/images/icons/up.svg'

import {mapMutations} from 'vuex'

export default {
  components: {
    ytIcon,
    tlIcon,
    inIcon,
    vkIcon,
    fbIcon,
    okIcon,
    tkIcon,
    wroteUs,
    up
  },

  methods: {
    toTop() {
      if (!process.browser) return
      window.scroll(0, 0);
    },

    showPopup() {
      this.changePopup('WroteUs')
      this.openPopup()
    },

    ...mapMutations({
      changePopup: 'popups/updatePopup',
      openPopup: 'popups/openPopup',
    }),
  }
}
</script>

<style lang="scss">

@media (min-width: 992px) {
  .page-middle {
    padding-left: 68px;
  }
  footer.footer {
    padding-left: 68px;
  }
}
.page-wrapper {
  position: relative;
}
.panel {
  color: #bababa;
  overflow: hidden;
  text-align: center;
  @include fz(13);

  @media (min-width: 992px) {
    position: absolute;
    top: 94px;
    left: 0;
    z-index: 9;
    bottom: 0;
    width: 68px;
    background: $black;

    &-inner {
      position: fixed;
      left: 0;
      width: 68px;
      min-height: calc(100vh - 94px);
      padding: 68px 0px 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
  }

  &-share {
    width: 18px;
    margin: 0 auto 50px;

    &-link {
      display: block;
      width: 18px;
      height: 18px;
      margin-bottom: 14px;
      opacity: 0.75;
      transition: opacity .2s;

      &:hover {
        opacity: 1;
      }
    }
  }

  &-popup {
    @include fz(13);
    margin-bottom: 20px;
    line-height: 1.2;
    cursor: pointer;
    transition: color .2s;

    svg {
      fill: $primary;
    }

    &-icon {
      margin-bottom: 10px;
      display: inline-block;
      width: 48px;
    }
    &:hover {
      color: #FFF;

      svg {
        fill: $primary_hover;
      }
    }
  }

  &-to-top {
    display: inline-block;
    width: 40px;
    height: 40px;
    padding: 10px;
    cursor: pointer;

    svg {
      fill: #bababa;
    }
    &:hover {
      svg {
        fill: #FFF;
      }
    }
  }

  @media (max-width: 992px) {
    &-share {
      display: none;
      visibility: hidden;
    }

    &-popup {
      position: fixed;
      right: 35px;
      bottom: 15px;
      border: 1px solid rgba(#FFF,.15);
      margin-bottom: 0;
      font-size: 0;
      background: #222;
      padding: 13px 10px;
      border-radius: 50%;
      z-index: 29;

      &-icon {
        margin-bottom: 0;
        width: 30px;
        height: 24px;
      }
    }
    
    &-to-top {
      display: none;
    }
  }

  @media (max-width: 576px) {
    &-popup {
      right: 15px;
    }
  }
}
</style>

<i18n>
{
  "ru": {
    "btn": "Написать нам"
  },
  "by": {
    "btn": "Напісаць нам"
  }
}
</i18n>