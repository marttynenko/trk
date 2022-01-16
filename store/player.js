// import config from '~/config'

export const state = () => ({
  source: null,
  activity: false,
  // source: 'wHFZjTDC8kU',
  // activity: true,
  type: 'video'
})

export const getters = {
  getSource (state) {
    return state.source
  },

  getActivity(state) {
    return state.activity
  },

  getType(state) {
    return state.type
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