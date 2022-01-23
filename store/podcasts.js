import config from '~/config'

export const state = () => ({
  block: [],
  page: [],
  pageMoreData: true,
  banner: null
})

export const getters = {
  getBlock (state) {
    return state.block
  },

  getPage (state) {
    return state.page
  },

  getPagesMoreData(state) {
    return state.pageMoreData
  },

  getBanner(state) {
    return state.banner
  }
}

export const mutations = {
  setPage(state, arr) {
    if (!Object.keys(arr.data).length) {
      return state.page = []
    }

    const list = []
    for (let key in arr.data) {
      list.unshift(arr.data[key])
    }

    const clean = list.map(el => {
      const modifiered = {}
      modifiered.IMG = (el.PREVIEW_PICTURE && el.PREVIEW_PICTURE.SRC && el.PREVIEW_PICTURE.SRC.length) 
        ? config.APIserver + el.PREVIEW_PICTURE.SRC
        : '/images/plugs/post-card.jpeg'

      modifiered.AUDIO = (el.PROPERTIES.PODCAST && el.PROPERTIES.PODCAST.VALUE)
        ? el.PROPERTIES.PODCAST.VALUE
        : null
      
      if (el.PROPERTIES.THEME && el.PROPERTIES.THEME.VALUE.length) {
        modifiered.THEME = el.PROPERTIES.THEME.VALUE
      }
      
      modifiered.ID = el.ID
      modifiered.NAME = el.NAME
      
      return modifiered
    })

    state.page = clean

    state.pageMoreData = config.checkMoreData(arr.nav, 12)
  },

  setBlock(state, arr) {
    if (!Object.keys(arr.data).length) {
      return state.block = []
    }

    const list = []
    for (let key in arr.data) {
      list.unshift(arr.data[key])
    }

    const clean = list.map(el => {
      const modifiered = {}
      modifiered.IMG = (el.PREVIEW_PICTURE && el.PREVIEW_PICTURE.SRC && el.PREVIEW_PICTURE.SRC.length) 
        ? config.APIserver + el.PREVIEW_PICTURE.SRC
        : '/images/plugs/post-card.jpeg'

      modifiered.AUDIO = (el.PROPERTIES.PODCAST && el.PROPERTIES.PODCAST.VALUE)
        ? el.PROPERTIES.PODCAST.VALUE
        // ? config.APIserver + el.PROPERTIES.PODCAST.VALUE
        : null

      modifiered.ID = el.ID
      modifiered.NAME = el.NAME
      
      return modifiered
    })

    state.block = clean
  },

  setBanner(state,arr) {
    if (!Object.keys(arr.data).length) {
      return state.banner = null
    }

    let modifiered;
    for (let key in arr.data) {
      modifiered = arr.data[key]
    }

    // modifiered.NAME = modifiered.PROPERTIES.VIDEO_LINK.VALUE
    if (modifiered.PREVIEW_PICTURE && modifiered.PREVIEW_PICTURE.SRC && modifiered.PREVIEW_PICTURE.SRC.length) {
      modifiered.IMG = config.APIserver + modifiered.PREVIEW_PICTURE.SRC
    }
    if (modifiered.PROPERTIES.THEME.VALUE && modifiered.PROPERTIES.THEME.VALUE.length) {
      modifiered.THEME = modifiered.PROPERTIES.THEME.VALUE
    }
    
    state.banner = modifiered
  }
}

export const actions = {
  async fetchBlock ({ commit}) {
    try {
      const iblockID = config.getIblock(this.$i18n.locale,'podcasts')
      
      const news = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[active]=Y&sort=active_from:desc&fields=id,name,podcast,preview_picture&limit=5`)
      
      commit('setBlock', news)
    } catch (e) {
      console.log(e)
    }
  },

  async fetchPage ({ commit}, page = 1) {
    try {
      const iblockID = config.getIblock(this.$i18n.locale,'podcasts')
      
      const news = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[active]=Y&sort=active_from:desc&fields=id,name,podcast,preview_picture,theme&limit=12&page=${page}`)
      
      commit('setPage', news)
    } catch (e) {
      console.log(e)
    }
  },

  async fetchBanner ({ commit}) {
    try {
      const iblockID = config.getIblock(this.$i18n.locale,'podcastsInfo')
      
      const news = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[active]=Y&sort=active_from:desc&fields=id,name,preview_picture,preview_text,theme&limit=1`)
      
      commit('setBanner', news)
    } catch (e) {
      console.log(e)
    }
  }
}