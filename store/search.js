import config from '~/config'

export const state = () => ({
  results: [],
  currentPage: 0
})

export const getters = {
  getResults (state) {
    return state.results
  },

  firstShows(state) {
    return state.shows.length <= 10
      ? state.shows
      : state.shows.slice(0,10)
  },

  currentPage (state) {
    return state.currentPage
  }
}

export const mutations = {
  updateResults (state, arr) {
    const list = []
    for (let key in arr.data) {
      list.unshift(arr.data[key])
    }
    // const clean = list.map(el => {
    //   const modifiered = {}

    //   modifiered.VIDEO = el.PROPERTIES.VIDEO_LINK.VALUE

    //   const videoChanks = modifiered.VIDEO.split('/')
    //   const videoID = videoChanks[videoChanks.length - 1]
    //   modifiered.IMG = `//img.youtube.com/vi/${videoID}/hqdefault.jpg`

    //   modifiered.ACTIVE_FROM = el.ACTIVE_FROM
    //   modifiered.URL = '/shows/'+el.IBLOCK_SECTION_ID
    //   modifiered.ID = el.ID
    //   modifiered.NAME = el.NAME
      
    //   return modifiered
    // })

    // state.posts = clean
    // state.shows = state.shows.concat(clean)
    // state.shows = list
    state.results = list
  }
}

export const actions = {
  async fetchResults ({ commit}, {query, page = 1}) {
    try {
      const data = await this.$axios.$post(`${config.APIserver}/api/search/?q=${encodeURIComponent(query)}&clear=Y&limit=10`)
      commit('updateResults', data)
    } catch (e) {
      console.log(e)
    }
  }
}