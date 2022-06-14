<template>
  <div class="onair">
    <div class="inner-wide">
      <div class="onair-header flex valign-center align-justify">
        <h4 class="onair-header-title">{{$t('title')}}</h4>
        <nuxt-link :to="localePath('/shows')" class="ui-btn">{{$t('btn')}}</nuxt-link>
      </div>

      <div class="row" v-if="shows && shows.length">
        <div class="col-lg-3 col-xs-6"
          v-for="item in shows"
          :key="item.ID"
        >
          <div class="onair-card">
            <div class="onair-card-img ui-video" @click.prevent="changeSource(item.VIDEO)">
              <img :src="item.IMG" :alt="item.NAME">
            </div>
            <div class="onair-card-string flex valign-baseline align-justify">
              <!-- <div class="onair-card-theme">Классный час</div> -->
              <div class="onair-card-date">{{item.ACTIVE_FROM}}</div>
            </div>

            <div class="onair-card-title">{{item.NAME}}</div>
          </div>
        </div>

        
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  async fetch() {
    await this.$store.dispatch('shows/fetchShowsBlock')
  },

  computed: {
    ...mapGetters({shows:'shows/getShowsBlock'})
  },

  methods: {
    ...mapMutations({changeSource: 'player/changeSource'}),
  }
}
</script>


<style lang="scss">
.onair {
  background: #282828;
  padding-top: 75px;
  padding-bottom: 70px;
  color: #FFF;

  &-header {
    margin-bottom: 35px;

    &-title {
      @include fz(36);
      margin: 0;
    }
  }

  &-card {
    margin-bottom: 35px;

    &-img {
      padding: 20px;
      border: 2px solid $primary;
      border-radius: 6px;
      margin-bottom: 25px;
      position: relative;

      img {
        display: block;
        margin: 0 auto;
        border-radius: 6px;
        width: auto;
      }
    }

    &-string {
      margin-bottom: 15px;
    }

    &-theme {
      font-weight: 600;
      color: $primary;
      @include fz(16);
    }

    &-title {
      @include fz(14);
      font-weight: 600;
    }

    &-date {
      @include fz(14);
    }
  }

  @media (max-width: 576px) {
    padding-top: 35px;
    padding-bottom: 30px;

    &-card {
      &-img {
        margin-bottom: 12px;
      }
      &-string {
        margin-bottom: 8px;
      }
    }
  }

  @media (max-width: 420px) {
    &-header {
      display: block;
      margin-bottom: 25px;

      &-title {
        margin-bottom: 8px;
      }
    }
  }

}
</style>

<i18n>
{
  "ru": {
    "title":"В эфире",
    "btn": "Смотреть все проекты"
  },
  "by": {
    "title":"У эфіры",
    "btn": "Глядзець усе праекты"
  }
}
</i18n>