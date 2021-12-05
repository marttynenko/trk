<template>
  <div class="ui-sharing">
    <span class="ui-sharing-label">Поделиться</span>
    <div class="ui-sharing-items">
      <ShareNetwork
        v-for="network in networks"
        :network="network.network"
        :key="network.network"
        :style="{backgroundColor: network.color}"
        :url="sharingData.url"
        :title="sharingData.title"
      >
        <i :class="network.icon"></i>
      </ShareNetwork>
    </div>
  </div>
</template>

<script>
import VueSocialSharing from 'vue-social-sharing'

export default {
  components: {
    VueSocialSharing
  },

  props: {
    sharingData: Object
  },

  data() {
    return {
      networks: [
        { network: 'telegram', name: 'Telegram', icon: 'ui-sharing-icon ui-sharing-telegram', color: '#0088cc' },
        { network: 'twitter', name: 'Twitter', icon: 'ui-sharing-icon ui-sharing-twitter', color: '#1da1f2' },
        { network: 'vk', name: 'Vk', icon: 'ui-sharing-icon ui-sharing-vk', color: '#4a76a8' },
        { network: 'facebook', name: 'Facebook', icon: 'ui-sharing-icon ui-sharing-facebook', color: '#1877f2' },
        { network: 'odnoklassniki', name: 'Odnoklassniki', icon: 'ui-sharing-icon ui-sharing-odnoklassniki', color: '#ed812b' },
      ]
    }
  }
}
</script>

<style lang="scss">
.ui-sharing {
  text-align: right;
  margin-bottom: 40px;

  &-label, &-items {
    display: inline-block;
    vertical-align: middle;
  }
  &-label {
    margin-right: 5px;
    margin-bottom: 5px;
  }
  &-items {
    a {
      display: inline-block;
      vertical-align: middle;
      width: 36px;
      height: 36px;
      border-radius: 18px;
      padding: 9px;
      background-color: #0088CC;
      margin-left: 15px;
      margin-bottom: 5px;
      text-align: center;
      transition: opacity .2s;

      &:hover {
        opacity: .8;
      }
    }
  }

  &-icon {
    display: block;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  &-telegram {
    background-image: url(@/assets/images/subscribe/telegram.svg?inline);
  }
  &-twitter {
    background-image: url(@/assets/images/subscribe/twitter.svg?inline);
  }
  &-vk {
    background-image: url(@/assets/images/subscribe/vk.svg?inline);
  }
  &-facebook {
    background-image: url(@/assets/images/subscribe/facebook.svg?inline);
  }
  &-odnoklassniki {
    background-image: url(@/assets/images/subscribe/odnoklassniki.svg?inline);
  }
}
</style>