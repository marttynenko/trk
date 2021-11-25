<template>
  <div class="row">
    <div class="col-12">
      <div class="ui-breadcrumbs">
        <nuxt-link to="/" class="ui-breadcrumbs-link">Главная</nuxt-link>
        <span class="ui-breadcrumbs-current">Новости</span>
      </div>

      <h1 class="page-title">Новости</h1>
      
    </div>
    <main class="col-md-9">
      <div class="news-list">
        <NewsCard v-for="card in cards" :key="card.id" :news="card"/>
      </div>
    </main>
    <div class="col-md-3">
      <Sidebar />
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/sidebar.vue'
import NewsCard from '~/components/NewsCard.vue'

export default {
  head() {
    return {
      title: "Новости - ТРК"
    }
  },

  data() {
    return {
      cards: [
        {
          id: '01',
          url: '#',
          title: 'Идеальный завтрак: диетолог назвала продукты, которые лучше есть с утра',
          img: '//via.placeholder.com/290x190',
          descr: 'Быстрее включиться в работу утром могут помочь некоторые продукты, рассказала в интервью врач-диетолог Елена Соломатина.',
          date: '13:44 | 22 сентября'
        },{
          id: '02',
          url: '#',
          title: '«Это уровень моей удачи по жизни»: кот устроил хаос на кухне и сам же испугался. Вы точно будете смеяться!',
          img: '//via.placeholder.com/290x190/000/FFF',
          descr: 'На кадрах кот буквально за считанные секунды навел суету на кухне. Пушистый питомец хотел облюбовать ',
          date: '13:49 | 21 сентября'
        }

      ]
    }
  },
  
  components: {
    Sidebar, NewsCard
  }
}
</script>