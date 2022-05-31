<template>
  <div class="error-page">
    <div class="error-page-code">{{error.statusCode}}</div>
    <div class="error-page-msg" v-if="error.statusCode === 404">{{$t('msg')}}</div>
    <div class="error-page-msg" v-else>{{$t('msg2')}}</div>
    <nuxt-link to="/" class="error-page-btn">{{$t('btn')}} →</nuxt-link>
  </div>
</template>

<script>


export default {
  props: ['error'],
  layout: 'error',
}
</script>


<i18n>
{
  "ru": {
    "msg":"К сожалению, запрашиваемая вами страница не найдена или допущена ошибка в URL-адресе",
    "msg2":"Произошла непредвиденная ошибка",
    "btn":"На главную"
  },
  "by": {
    "msg":"Нажаль, запытаная вамі старонка не знойдзена ці дапушчана памылка ў URL-адрасе",
    "msg2":"Адбылася непрадбачаная памылка",
    "btn":"На галоўную"
  }
}
</i18n>