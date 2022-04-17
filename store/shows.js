import config from '~/config'

export const state = () => ({
  shows: [],
  showsMoreData: true,
  categories: [],
  categoriesMoreData: true,
  frontCategories: [],
  frontCategory: null,
  page: null,
  showsBlock: []
})

export const getters = {
  getShows (state) {
    return state.shows
  },

  getShowsMoreData (state) {
    return state.showsMoreData
  },

  getCategories(state) {
    return state.categories
  },

  getCategoriesMoreData(state) {
    return state.categoriesMoreData
  },

  getFrontCategories(state) {
    return state.frontCategories
  },

  getFrontCategory(state) {
    return state.frontCategory
  },

  getPage(state) {
    return state.page
  },

  getShowsBlock(state) {
    return state.showsBlock
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

      modifiered.VIDEO = (el.PROPERTIES.VIDEO_LINK && el.PROPERTIES.VIDEO_LINK.VALUE)
        ? el.PROPERTIES.VIDEO_LINK.VALUE
        : null

      const videoChanks = modifiered.VIDEO.split('/')
      const videoID = videoChanks[videoChanks.length - 1]
      modifiered.IMG = `//img.youtube.com/vi/${videoID}/mqdefault.jpg`

      modifiered.ACTIVE_FROM = config.dateFormatter(el.ACTIVE_FROM)
      modifiered.URL = '/shows/'+el.IBLOCK_SECTION_ID
      modifiered.ID = el.ID
      modifiered.NAME = el.NAME
      
      return modifiered
    })

    state.shows = clean


    //определяем есть ли еще данные
    state.showsMoreData = config.checkMoreData(arr.nav,12)

    //определяем есть ли еще данные
    // const {currentPage,count,total} = arr.nav
    // if (+currentPage * 12 >= total) {
    //   state.showsMoreData = false
    // } else {
    //   state.showsMoreData = true
    // }
  },

  updateCategories(state,arr) {
    const list = []
    for (let key in arr.data) {
      list.unshift(arr.data[key])
    }

    const clean = list.map(el => {
      const modifiered = {}

      modifiered.URL = '/shows/'+el.CODE
      modifiered.ID = el.ID
      modifiered.NAME = el.NAME
      modifiered.IMG = (el.DETAIL_PICTURE && el.DETAIL_PICTURE.SRC)
        ? config.APIserver + el.DETAIL_PICTURE.SRC
        : '/images/plugs/post-card.jpeg'
      
      return modifiered
    })

    // state.categories = state.categories.concat(clean)
    state.categories = clean

    //определяем есть ли еще данные
    state.categoriesMoreData = config.checkMoreData(arr.nav,12)
  },

  updateFrontCategories(state,arr) {
    const list = []
    for (let key in arr.data) {
      list.unshift(arr.data[key])
    }

    const clean = list.map(el => {
      const modifiered = {}

      modifiered.URL = '/shows/'+el.CODE
      modifiered.ID = el.ID
      modifiered.NAME = el.NAME
      modifiered.IMG = (el.DETAIL_PICTURE && el.DETAIL_PICTURE.SRC)
        ? config.APIserver + el.DETAIL_PICTURE.SRC
        : '/images/plugs/post-card.jpeg'
      
      return modifiered
    })

    state.frontCategories = clean
  },

  updateFrontCategory(state, arr) {
    let modifired
    for (let key in arr.data) {
      modifired = arr.data[key]
    }

    modifired.IMG = (modifired.DETAIL_PICTURE && modifired.DETAIL_PICTURE.SRC)
        ? config.APIserver + modifired.DETAIL_PICTURE.SRC
        : '/images/plugs/main-mews.jpeg'
    modifired.DESCRIPTION = modifired.DESCRIPTION.replace(/<\/?[^>]+>/ig, " ").substring(0,220)
    modifired.URL = '/shows/'+modifired.CODE

    state.frontCategory = modifired
  },

  updatePage(state, arr) {
    let modifired
    for (let key in arr.data) {
      modifired = arr.data[key]
    }

    modifired.IMG = (modifired.DETAIL_PICTURE && modifired.DETAIL_PICTURE.SRC)
        ? config.APIserver + modifired.DETAIL_PICTURE.SRC
        : null

    state.page = modifired
  },

  setShowsBlock(state,arr) {
    const list = []
    for (let key in arr.data) {
      list.unshift(arr.data[key])
    }

    const clean = list.map(el => {
      const modifiered = {}

      modifiered.VIDEO = el.PROPERTIES.VIDEO_LINK.VALUE
      modifiered.ID = el.ID
      modifiered.NAME = el.NAME
      modifiered.ACTIVE_FROM = config.dateFormatter(el.ACTIVE_FROM)
      // modifiered.IMG = (el.DETAIL_PICTURE && el.DETAIL_PICTURE.SRC)
      //   ? config.APIserver + el.DETAIL_PICTURE.SRC
      //   : '/images/plugs/post-card.jpeg'
      const videoChanks = modifiered.VIDEO.split('/')
      const videoID = videoChanks[videoChanks.length - 1]
      modifiered.IMG = `//img.youtube.com/vi/${videoID}/mqdefault.jpg`
      
      return modifiered
    })

    // state.categories = state.categories.concat(clean)
    state.showsBlock = clean
  }
}

export const actions = {
  async fetchShows ({ commit}, {category, page = 1}) {
    try {
      const iblockID = config.getIblock(this.$i18n.locale,'shows')

      const news = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[active]=Y&filter[iblock_section_id]=${category}&sort=active_from:desc&fields=video_link,active_from,iblock_section_id,name&limit=12&page=${page}`)
      commit('updateList', news)
    } catch (e) {
      console.log(e)
    }
  },

  async fetchCategories({commit}, {page = 1}) {
    try {
      const iblockID = config.getIblock(this.$i18n.locale,'shows')
      
      const cats = await this.$axios.$get(`${config.APIserver}/api/section/?filter[iblock_id]=${iblockID}&filter[active]=Y&sort=id:desc&fields=id,name,code,detail_picture&limit=12&page=${page}`)
      // console.log(cats)
      commit('updateCategories', cats)
    } catch (e) {
      console.log(e)
    }
  },

  async fetchFrontCategories({commit}) {
    try {
      const iblockID = config.getIblock(this.$i18n.locale,'shows')

      const cats = await this.$axios.$get(`${config.APIserver}/api/section/?filter[iblock_id]=${iblockID}&filter[active]=Y&sort=id:desc&fields=id,name,code,detail_picture&limit=4`)
      commit('updateFrontCategories', cats)
    } catch (e) {
      console.log(e)
    }
  },

  async fetchFrontCategory({commit}) {
    try {
      const iblockID = config.getIblock(this.$i18n.locale,'shows')

      const cat = await this.$axios.$get(`${config.APIserver}/api/section/?filter[iblock_id]=${iblockID}&filter[active]=Y&sort=id:desc&fields=id,name,code,detail_picture,description&limit=1`)
      commit('updateFrontCategory', cat)
    } catch (e) {
      console.log(e)
    }
  },

  async fetchPage({dispatch,commit,state},code) {
    try {
      const iblockID = config.getIblock(this.$i18n.locale,'shows')

      const cat = await this.$axios.$get(`${config.APIserver}/api/section/?filter[iblock_id]=${iblockID}&filter[active]=Y&filter[code]=${encodeURIComponent(code)}&sort=id:desc&fields=id,name,code,detail_picture,description&limit=1`)
      commit('updatePage', cat)

      await dispatch('fetchShows', {category: state.page.ID}) 
    } catch (e) {
      console.log(e)
    }
  },

  async fetchShowsBlock ({ commit}) {
    try {
      const iblockID = config.getIblock(this.$i18n.locale,'shows')

      const news = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[active]=Y&sort=active_from:desc&fields=video_link,active_from,name&limit=4`)
      commit('setShowsBlock', news)
    } catch (e) {
      console.log(e)
    }
  },
}