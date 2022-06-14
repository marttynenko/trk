<template>
  <div class="post-subscribe">
    <div class="post-subscribe-label">Подписаться</div>
    <div class="post-subscribe-items">
      <a href="https://www.youtube.com/channel/UCmeQS-euSReIz2l_HlaaQ0Q" class="post-subscribe-item youtube" rel="nofollow" target="_blank">
        <iconYoutube />
      </a>
      <a href="https://t.me/trkgomel" class="post-subscribe-item telegram" rel="nofollow" target="_blank">
        <iconTelegram />
      </a>
      <a href="https://www.instagram.com/b4_gomel" class="post-subscribe-item instagram" rel="nofollow" target="_blank">
        <iconInstagram />
      </a>
      <a href="https://vk.com/bel4gomel" class="post-subscribe-item vk" rel="nofollow" target="_blank">
        <iconVk />
      </a>
      <a href="https://www.facebook.com/groups/bel4gomel" class="post-subscribe-item facebook" rel="nofollow" target="_blank">
        <iconFacebook />
      </a>
      <a href="https://ok.ru/bel4gomel" class="post-subscribe-item odnoklassniki" rel="nofollow" target="_blank">
        <iconOdnoklassniki />
      </a>
      <a href="https://www.tiktok.com/@tvr_gomel" class="post-subscribe-item tiktok" rel="nofollow" target="_blank">
        <iconTiktok />
      </a>
    </div>
  </div>
</template>

<script>
import iconYoutube from '@/assets/images/subscribe/youtube.svg'
import iconTelegram from '@/assets/images/subscribe/telegram.svg'
import iconInstagram from '@/assets/images/subscribe/instagram.svg'
import iconVk from '@/assets/images/subscribe/vk.svg'
import iconFacebook from '@/assets/images/subscribe/facebook.svg'
import iconOdnoklassniki from '@/assets/images/subscribe/odnoklassniki.svg'
import iconTiktok from '@/assets/images/subscribe/tiktok.svg'

export default {
  components: {
    iconYoutube,
    iconTelegram,
    iconInstagram,
    iconVk,
    iconFacebook,
    iconOdnoklassniki,
    iconTiktok
  }
}
</script>

<style lang="scss">
.post-subscribe {
  margin-bottom: 10px;
  text-align: right;

  &-label {
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 5px;
    margin-right: 5px;
  }
  &-items {
    display: inline-block;
    vertical-align: middle;
    font-size: 0;
  }
  &-item {
    display: inline-block;
    vertical-align: middle;
    width: 36px;
    height: 36px;
    border-radius: 18px;
    padding: 8px;
    background-color: #0088CC;
    margin-left: 15px;
    margin-bottom: 5px;
    text-align: center;
    transition: opacity .2s;

    &:hover {
      opacity: .8;
    }

    &.youtube {
      background-color: #C4302B;
    }
    &.instagram {
      background-color: #C7327D;
    }
    &.vk {
      background-color: #597DA3;
    }
    &.facebook {
      background-color: #3B5998;
    }
    &.odnoklassniki {
      background-color: #ED812B;
    }
    &.tiktok {
      background-color: #090909;
    }
  }

  @media (max-width: 576px) {
    &-item {
      margin-left: 7px;
      width: 32px;
      height: 32px;
    }
  }
}
</style>