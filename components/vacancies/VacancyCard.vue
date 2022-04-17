<template>
  <div class="vacancy-card">
    <div class="vacancy-card-position">{{vacancy.NAME}}</div>
    <div class="vacancy-card-salary">{{vacancy.SALARY}}</div>
    <div class="vacancy-card-descr">{{vacancy.PREVIEW_TEXT}}</div>
    <div class="vacancy-card-liks">
      <a href="javascript:void(0)" class="vacancy-card-link vacancy-card-link-toform" @click.prevent="scrollToForm">Откликнуться</a>
      <nuxt-link :to="localePath('/about/contacts')" class="vacancy-card-link">Посмотреть контакты</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "vacancyCard",

  props: {
    vacancy: {
      type: Object,
      required: true
    }
  },

  methods: {
    scrollToForm() {
      if (!document.querySelector('.rezume.ui-form')) return
      document.querySelector('.rezume.ui-form').scrollIntoView({behavior: 'smooth'})
    }
  }
}
</script>

<style lang="scss">
.vacancy-card {
  margin-bottom: 30px;
  padding: 20px 30px;
  border: 2px solid $primary;
  @include fz(15);

  &-position {
    margin-bottom: 10px;
    font-weight: 600;
    @include fz(20);
  }
  
  &-salary {
    margin-bottom: 10px;
    font-weight: 600;
    @include fz(18);
  }

  &-descr {
    color: #636363;
    margin-bottom: 12px;
  }

  &-link {
    color: $font;
    font-weight: 500;
    margin-right: 25px;

    &:hover {
      color: $primary;
    }
  }

  @media (min-width: 1366px) {
    padding: 25px 60px;
  }
}
</style>