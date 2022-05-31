<template>
  <div class="inner">
    <div class="row">
      <div class="col-layout-content col-md-8">
        <div class="ui-breadcrumbs">
          <nuxt-link :to="localePath('/')" class="ui-breadcrumbs-link">{{$t('main')}}</nuxt-link>
          <nuxt-link :to="localePath('/shows/')" class="ui-breadcrumbs-link">{{$t('specials')}}</nuxt-link>
        </div>

      </div><!--.col-12-->

      <main class="col-layout-content col-md-8">
        <div class="show" :data-id="page.ID">
          <h1 class="show-title">{{page.NAME}}</h1>
          <div class="show-image" v-if="page.IMG"><img :src="page.IMG" :alt="page.NAME"></div>
          <div class="h3">{{$t('about')}}:</div>
          <div class="show-body" v-html="page.DESCRIPTION"></div>
        </div>

        <hr class="ui-hr"/>

        <div class="shows-editions-wrap" v-if="shows && shows.length">
          <div class="shows-editions">
            <div class="h3 shows-editions-title">{{$t('editions')}}</div>

            <div class="row" ref="list">
              <div class="col-md-4 col-us-6"
                v-for="show in shows"
                :key="show.ID"
              >
                <div class="shows-edition">
                  <div class="shows-edition-img ui-video" @click.prevent="changeSource(show.VIDEO)">
                    <img :src="show.IMG" :alt="show.NAME" loading="lazy">
                  </div>

                  <div class="shows-edition-date">{{show.ACTIVE_FROM}}</div>

                  <div class="show-edition-title">{{show.NAME}}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="ui-pgn" v-if="isMoreData">
            <a href="#" class="ui-pgn-btn ui-btn" @click.prevent="toNextPage">Смотреть больше</a>
          </div>
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
import {mapActions, mapGetters, mapMutations} from 'vuex'


export default {
  components: {
    Aside
  },

  data () {
    return {
      currentPage: 1,
    }
  },  

  async asyncData({store, params}) {
    await store.dispatch('shows/fetchPage', params.slug)
  },

  computed: {
    ...mapGetters({
      page: 'shows/getPage',
      shows: 'shows/getShows',
      isMoreData: 'shows/getShowsMoreData'
    })
  },

  methods: {
    ...mapActions({fetchShows: 'shows/fetchShows'}),

    ...mapMutations({changeSource: 'player/changeSource'}),

    toNextPage() {
      this.fetchShows({category: this.page.ID, page: ++this.currentPage})
        .then(()=>{
          const offset = this.$refs.list.offsetTop
          window.scrollTo({
            top: offset - 160,
            behavior: "smooth"
          })
          // this.$refs.list.scrollIntoView({behavior: "smooth"})
        })
    }
  },


}
</script>


<style lang="scss">
.shows-editions {
  margin-bottom: 50px;

  @media (max-width: 992px) {
    margin-bottom: 10px;
  }
}
.shows-edition {
  margin-bottom: 30px;
  @include fz(14);

  &-img {
    margin-bottom: 20px;
    padding-bottom: 56.25%;
    position: relative;
    overflow: hidden;
    background: #444;

    img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      min-width: 100%;
    }

    &:hover {
      img {
        transform: translate(-50%, -50%) scale(1.03);
      }
    }
  }
  &-date {
    margin-bottom: 15px;
    color: $font_gray;
  }

  @media (max-width: 576px) {
    &-img {
      margin-bottom: 12px;
    }
    &-date {
      margin-bottom: 8px;
    }
  }
}
</style>

<i18n>
{
  "ru": {
    "main":"Главная",
    "specials": "Спецпроекты",
    "about": "О проекте",
    "editions": "Все выпуски"
  },
  "by": {
    "main": "Галоўная",
    "specials": "Спецпраекты",
    "about": "Пра праект",
    "editions": "Усе выпускі"
  }
}
</i18n>