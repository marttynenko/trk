<template>
  <div class="inner">
    <div class="row">
      <div class="col-layout-content col-md-8">
        <div class="ui-breadcrumbs">
          <nuxt-link to="/" class="ui-breadcrumbs-link">Главная</nuxt-link>
          <nuxt-link to="/news" class="ui-breadcrumbs-link">Новости</nuxt-link>
          <span class="ui-breadcrumbs-current">Название новости</span>
        </div>

      </div><!--.col-12-->

      <main class="col-layout-content col-md-8">
        <div class="show">
          <h1 class="show-title">Добрый вечер, Гомель!</h1>
          <div class="show-image"><img src="//via.placeholder.com/893x280" alt="alt"></div>
          <div class="h3">О проекте :</div>
          <p>Программа «Добрый вечер, Гомель!» - это разговор на самые актуальные темы, рассказ о самых ярких событиях из жизни Гомельщины, интересные гости в студии и профессиональная команда известных и любимых телезрителями ведущих телерадиокомпании «Гомель». «Добрый вечер, Гомель!» - это приятная возможность всей семьей провести время у телеэкрана.</p>
          <p>Смотрите программу со вторника по пятницу на телеканале "Беларусь 4 Гомель" в 20.25.Телефон прямого эфира: 8-0232-34-22-43.А также присоединяйтесь к нам в Viber по телефону +375 33 34 22 430 и в группу </p>
        </div>

        <hr class="ui-hr"/>

        <div class="shows-editions">
          <div class="h3 shows-editions-title">Все выпуски</div>

          <div class="row">
            <div class="col-md-4 col-us-6"
              v-for="show in shows"
              :key="show.ID"
            >
              <div class="shows-edition">
                <div class="shows-edition-img ui-video">
                  <img :src="show.IMG" :alt="show.NAME" loading="lazy">
                </div>

                <div class="shows-edition-date">{{show.ACTIVE_FROM}}</div>

                <div class="show-edition-title">{{show.NAME}}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="ui-pgn">
          <a href="#" class="ui-pgn-btn ui-btn">Смотреть больше</a>
        </div>

      </main>

      <div class="col-layout-aside col-md-4">
        <Aside />
      </div>
    </div>
  </div>
</template>

<script>
import Aside from '~/components/Aside.vue'
import {mapActions, mapGetters} from 'vuex'


export default {
  components: {
    Aside
  },

  data () {
    return {
      shows: [
        {NAME: 'Накануне выходных. Часть 1| Добрый вечер, Гомель!', ACTIVE_FROM: '19:45 | 19 июля', IMG: '//via.placeholder.com/285x160', id: 123213}
      ]
    }
  },  

  // async asyncData({store, params}) {
  //   await store.dispatch('post/fetchPost', params.slug)
  // },

  // computed: {
  //   ...mapGetters({post: 'post/post'})
  // },

  // methods: {
  //   ...mapActions({fetchPost: 'post/fetchPost'})
  // },


}
</script>


<style lang="scss">
.shows-editions {
  margin-bottom: 50px;
}
.shows-edition {
  margin-bottom: 30px;
  @include fz(14);

  &-img {
    margin-bottom: 20px;
  }
  &-date {
    margin-bottom: 15px;
    color: $font_gray;

  }
}
</style>