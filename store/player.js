// import config from '~/config'

export const state = () => ({
  source: null,
  activity: false,
  // source: 'wHFZjTDC8kU',
  // activity: true,
  type: 'video',
  podcast: null
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
  },

  getPodcast(state) {
    return state.podcast
  }
}

export const mutations = {
  changeSource (state, data) {
    let incomingSource, incomingType
    if (typeof data !== 'object') {
      state.type = 'youtube'
      const chanks = data.split('/')
      const videoID = chanks[chanks.length - 1]
      state.source = videoID
    } else if (data.hasOwnProperty('podcast')) {
      state.type = 'podcast'
      state.source = data.source
      state.podcast = data.podcast
    }
    // console.log(incomingSource,incomingType)
    
    // if (incomingType !== 'podcast') {
    //   const chanks = incomingSource.split('/')
    //   const videoID = chanks[chanks.length - 1]
    //   state.source = videoID
    // } else if (incomingType === 'audio') {
    //   state.source = incomingSource
    // }
    // state.source = videoLink

    state.activity = true
  },

  toggleActivity (state) {
    state.activity = !state.activity
  },

  changeType(state, type) {
    state.type = type
  },

  setPodcast(state,podcast) {
    state.podcast = podcast
  }
}