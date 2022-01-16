import config from '~/config'

export const state = () => ({
  shows: [],
  categories: [],
  currentPage: 0
})

export const getters = {
  allShows (state) {
    return state.shows
  },

  firstShows(state) {
    return state.shows.length <= 10
      ? state.shows
      : state.shows.slice(0,10)
  },

  getCategories(state) {
    return state.categories
  }
}

export const mutations = {
  updateList (state, arr) {
    const list = []
    for (let key in arr.data) {
      list.unshift(arr.data[key])
    }
    const clean = list.map(el => {
      const modifiered = {}

      modifiered.VIDEO = el.PROPERTIES.VIDEO_LINK.VALUE

      const videoChanks = modifiered.VIDEO.split('/')
      const videoID = videoChanks[videoChanks.length - 1]
      modifiered.IMG = `//img.youtube.com/vi/${videoID}/hqdefault.jpg`

      modifiered.ACTIVE_FROM = el.ACTIVE_FROM
      modifiered.URL = '/shows/'+el.IBLOCK_SECTION_ID
      modifiered.ID = el.ID
      modifiered.NAME = el.NAME
      
      return modifiered
    })

    // state.posts = clean
    state.shows = state.shows.concat(clean)
    // state.shows = list
  },

  updateCategories(state,arr) {
    const list = []
    for (let key in arr.data) {
      list.unshift(arr.data[key])
    }

    state.categories = state.categories.concat(list)
  }
}

export const actions = {
  async fetchShows ({ commit}, page = 1) {
    try {
      const news = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=22&sort=active_from:desc&fields=video_link,active_from,iblock_section_id,name&limit=12&page=${page}`)
      // console.log(news)
      commit('updateList', news)
    } catch (e) {
      console.log(e)
    }
  },

  async fetchCategories({commit}, page = 1) {
    try {
      const iblockID = config.getIblock(this.$i18n.locale,'shows')

      const cats = await this.$axios.$get(`${config.APIserver}/api/section/?filter[iblock_id]=${iblockID}&filter[active]=Y&fields=id,name,code,detail_picture&clear=Y&limit=12&page=${page}`)
      // console.log(cats)
      commit('updateCategories', cats)
    } catch (e) {
      console.log(e)
    }
  }
}