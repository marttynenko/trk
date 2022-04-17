<template>
  <div class="static-page">
    <div class="inner">
      <div class="ui-breadcrumbs">
        <nuxt-link to="/" class="ui-breadcrumbs-link">Главная</nuxt-link>
        <nuxt-link to="/about" class="ui-breadcrumbs-link">О компании</nuxt-link>
        <span class="ui-breadcrumbs-current">Вакансии</span>
      </div>

      <static-menu />

      <main>
        <h1 class="page-title">Вакансии</h1>
           
        <div class="vacancies-list"
          v-if="vacancies && vacancies.length"
        >
          <vacancy-card 
            v-for="vacancy in vacancies"
            :key="vacancy.ID"
            :vacancy="vacancy"
          />
        </div>

        <no-vacancies v-else />

        <rezume />
      </main>

    </div>
  </div>
  
</template>

<script>
import Aside from '~/components/Aside.vue'
import StaticMenu from '~/components/StaticMenu.vue'
import VacancyCard from '~/components/vacancies/VacancyCard.vue'
import NoVacancies from '~/components/vacancies/NoVacancies.vue'
import Rezume from '~/components/forms/Rezume.vue'
import {mapGetters} from 'vuex'

export default {
  components: {
    Aside, StaticMenu, VacancyCard, NoVacancies, Rezume
  },

  head() {
    return {
      title: "Вакансии - Телерадиокомпания Гомель"
    }
  },

  async asyncData({store}) {
    await store.dispatch('vacancies/fetchVacancies')
  },

  computed: {
    ...mapGetters({vacancies: 'vacancies/getVacancies'})
  },

  mounted() {
    
  }
}
</script>

<style lang="scss">
.vacancies-list {
  margin-bottom: 100px;
}
</style>