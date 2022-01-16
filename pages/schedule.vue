<template> 
  <div class="schedule-page">
    <banner />
  
    <div class="inner">
      
      <div class="ui-breadcrumbs">
        <nuxt-link to="/" class="ui-breadcrumbs-link">Главная</nuxt-link>
        <span class="ui-breadcrumbs-current">Новости</span>
      </div>

      <div class="schedule-main">
        <div class="schedule-header">
          <div class="schedule-header-left">
            <h1 class="schedule-header-title">Телепрограмма</h1>
            <a href="#" class="ui-bordered">печать на неделю</a>
          </div>

          <div class="schedule-header-sharing">
            <Sharing :sharingData="sharingData" />
          </div>
        </div>

        <days-carousel />
        <program />
      </div>
        
    </div>
  </div>
</template>

<script>
import Sharing from '~/components/Sharing.vue'
import DaysCarousel from '~/components/schedule/DaysCarousel.vue'
import Program from '~/components/schedule/Program.vue'
import Banner from '~/components/schedule/Banner.vue'
import {mapGetters, mapActions} from 'vuex'

export default {
  head() {
    return {
      title: "Программа телепередач - ТРК"
    }
  },

  components: {
    Sharing, DaysCarousel, Program, Banner
  },

  data() {
    return {
      sharingData: {
        title: "Программа телепередач - ТРК",
        url: ''
      }
    }
  },

  // async asyncData({store}) {
  //   await store.dispatch('shows/fetchShows')
  // },

  // data() {
  //   return {
  //     currentPage: 1
  //   }
  // },

  // computed: {
  //   ...mapGetters({shows: 'shows/allShows'})
  // },

  // methods: {
  //   ...mapActions({fetchShows: 'shows/fetchShows'}),

  //   toNextPage() {
  //     this.fetchShows(++this.currentPage)
  //   }
  // },

  mounted () {
    this.sharingData.url = window.location.href
  }
}
</script>

<style lang="scss">
.schedule {
  &-page {
    margin-bottom: 30px;
  }

  &-header {
    margin-bottom: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-title {
      display: inline-block;
      vertical-align: middle;
      margin-right: 25px;
      margin-bottom: 0;
    }
    .ui-sharing {
      margin-top: 5px;
      margin-bottom: 0;
    }
    .ui-bordered {
      position: relative;
      top: 2px;
    }
  }

  @media (max-width: 992px) {
    &-header {
      display: block;

      &-left {
        margin-bottom: 25px;
      }
      .ui-sharing {
        text-align: left;
      }
    }
  }
}
</style>