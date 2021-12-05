// import config from '~/config'

export const state = () => ({
  source: null,
  activity: false
})

export const getters = {
  getSource (state) {
    return state.source
  },

  getActivity(state) {
    return state.activity
  }
}

export const mutations = {
  changeSource (state, videoLink) {
    const chanks = videoLink.split('/')
    const videoID = chanks[chanks.length - 1]
    state.source = videoID

    // state.source = videoLink
    state.activity = true
  },

  toggleActivity (state) {
    state.activity = !state.activity
  }
}

// export const actions = {
//   async fetchPosts ({ commit}) {
//     const news = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=2&filter[news_slider_value]=${encodeURIComponent('Да')}&sort=active_from:desc&fields=id,name,active_from,code&limit=10?clear=Y`)
//     commit('updatePosts', news)
//   }
// }