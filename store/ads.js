import config from '~/config'

export const state = () => ({
  categories: [],
  page: null,
  // categoriesMoreData: true,
})

export const getters = {
  getCategories(state) {
    return state.categories
  },

  getPage(state) {
    return state.page
  },

  // getCategoriesMoreData(state) {
  //   return state.categoriesMoreData
  // },
}

export const mutations = {

  updateCategories(state,arr) {
    const list = []
    for (let key in arr.data) {
      list.unshift(arr.data[key])
    }

    const clean = list.map(el => {
      const modifiered = {}

      modifiered.URL = '/reklama/'+el.CODE
      modifiered.ID = el.ID
      modifiered.NAME = el.NAME
      modifiered.IMG = (el.PREVIEW_PICTURE && el.PREVIEW_PICTURE.SRC)
        ? config.APIserver + el.PREVIEW_PICTURE.SRC
        : '/images/plugs/post-card.jpeg'
      
      return modifiered
    })

    // state.categories = state.categories.concat(clean)
    state.categories = clean

    //определяем есть ли еще данные
    // state.categoriesMoreData = config.checkMoreData(arr.nav,6)
  },

  updatePage(state, arr) {
    let modifired
    for (let key in arr.data) {
      modifired = arr.data[key]
    }

    state.page = modifired
  }
}

export const actions = {
  async fetchCategories({commit}) {
    try {
      const iblockID = config.getIblock(this.$i18n.locale,'ads')

      const cats = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[active]=Y&sort=active_from:desc&fields=id,name,code,preview_picture`)
      // console.log(cats)
      commit('updateCategories', cats)
    } catch (e) {
      console.log(e)
    }
  },

  async fetchPage({commit},code) {
    try {
      const iblockID = config.getIblock(this.$i18n.locale,'ads')

      const page = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[active]=Y&filter[code]=${encodeURIComponent(code)}&fields=id,name,detail_text&limit=1`)
      // console.log(page)
      commit('updatePage', page)
    } catch (e) {
      console.log(e)
    }
  }
}