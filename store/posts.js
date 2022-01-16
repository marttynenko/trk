import config from '~/config'

export const state = () => ({
  posts: [],
  currentPage: 0
})

export const getters = {
  allPosts (state) {
    return state.posts
  },

  firstPosts(state) {
    return state.posts.length <= 10
      ? state.posts
      : state.posts.slice(0,10)
  },

  currentPage (state) {
    return state.currentPage
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
      modifiered.DETAIL_TEXT = el.DETAIL_TEXT.replace(/<\/?[^>]+>/ig, " ").substring(0,220)

      modifiered.IMG = (el.PROPERTIES.PHOTO && el.PROPERTIES.PHOTO.VALUE) 
        ? config.APIserver + el.PROPERTIES.PHOTO.VALUE[0]
        : '/images/plugs/post-card.jpeg'

      modifiered.ACTIVE_FROM = el.ACTIVE_FROM
      modifiered.URL = '/news/'+el.CODE
      modifiered.ID = el.ID
      modifiered.NAME = el.NAME
      
      return modifiered
    })

    // state.posts = clean
    state.posts = state.posts.concat(clean)
  },

  updatePage(state, arr) {
    state.currentPage = arr.nav.currentPage
  },
}

export const actions = {
  async fetchNews ({ commit }, {page = 1, limit = 10}) {
    try {
      //get locale iblock id from config
      // const iblock = config.iblocks[this.$i18n.locale].news
      const iblockID = config.getIblock(this.$i18n.locale,'news')

      const news = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[active]=Y&sort=active_from:desc&fields=id,name,active_from,detail_text,detail_page_url,photo&limit=${limit}&page=${page}&clear=Y`)
      commit('updateList', news)
    } catch (e) {
      console.log(e)
    }
  }
}