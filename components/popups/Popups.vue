<template>
  <div class="ui-popup-all" v-if="isOpen">
    <div class="ui-popup-bg"></div>
    <div class="ui-popup-wrap">
      <div class="ui-popup-container">
        <div class="ui-popup-content">
          <component v-bind:is="dynamicPopup" :closeHandler="closePopup"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'

export default {
  components: {
    PopupNews: () => import('~/components/popups/PopupNews.vue'),
    WroteUs: () => import('~/components/popups/PopupWroteUs.vue')
  },


  computed: {
    ...mapGetters({
      dynamicPopup: 'popups/getPopup',
      isOpen: 'popups/getStatus'
    })
  },

  methods: {
    ...mapMutations({closePopup: 'popups/closePopup'}),
  }
}
</script>