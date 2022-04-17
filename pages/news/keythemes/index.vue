<template>
  <div class="inner">
    <div class="row">
      <div class="col-12">
        <div class="ui-breadcrumbs">
          <nuxt-link :to="localePath('/')" class="ui-breadcrumbs-link">{{$t('main')}}</nuxt-link>
          <span class="ui-breadcrumbs-current">{{$t('title')}}</span>
        </div>

        <h1 class="page-title">{{$t('title')}}</h1>
        
      </div>
      <main class="col-layout-content col-md-8">
        <div class="keythemes-list" v-if="links && links.length">
          <div class="row">
            <div class="col-md-4 col-6"
              v-for="link in links"
              :key="link.ID"
            >
              <nuxt-link class="keythemes-item-link" :to="localePath('/news/keythemes/'+link.CODE)">{{link.NAME}}</nuxt-link>
              
            </div>
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
import {mapGetters, mapMutations} from 'vuex'
import Aside from '~/components/Aside.vue'

export default {
  components: {
    Aside
  },

  head() {
    return {
      title: "Ключевые темы - ТРК"
    }
  },

  async asyncData({store}) {
    await store.dispatch('keythemes/fetchAllLinks')
  },

  computed: {
    ...mapGetters({links: 'keythemes/getAllLinks'})
  },

  methods: {
    //добавляем объект темы в хранилище
    // ...mapMutations({setTheme: 'keythemes/updateCurrentTheme'}),
  }
}
</script>


<style lang="scss">
.keythemes-list {
  margin-bottom: 50px;
}
.keythemes-item {

  &-link {
    display: block;
    margin-bottom: 30px;
    border: 1px solid $primary;
    color: $font;
    padding: 10px 15px;
    min-height: calc(100% - 30px);

    &:hover {
      color: $font;
      border-color: $primary_hover;
      background-color: rgba($primary,.08);
    }
  }

  
}
</style>


<i18n>
{
  "ru": {
    "title":"Ключевые темы",
    "main":"Главная"
  },
  "by": {
    "title":"Ключавыя тэмы",
    "main": "Галоўная"
  }
}
</i18n>