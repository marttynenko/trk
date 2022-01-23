import config from '~/config'

export const state = () => ({
  posts: null,
  date: '',
  moreData: true
})

export const getters = {
  getPosts (state) {
    return state.posts
  },

  getDate (state) {
    return state.date
  },

  getMoreData() {
    return state.moreData
  }
}

export const mutations = {
  setDate(state, val) {
    state.date = val
  },

  setPosts (state, arr) {
    if (!Object.keys(arr.data).length) {
      return state.posts = null
    }

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

      modifiered.ACTIVE_FROM = config.dateFormatter(el.ACTIVE_FROM)
      modifiered.URL = '/news/'+el.CODE
      modifiered.ID = el.ID
      modifiered.NAME = el.NAME
      
      return modifiered
    })

    state.posts = clean
    // state.posts = state.posts.concat(clean)

    //определяем есть ли еще данные
    state.moreData = config.checkMoreData(arr.nav, 10)
  },
}

export const actions = {
  async fetchPosts ({commit}, {date, page = 1, limit = 10}) {
    try {
      const iblockID = config.getIblock(this.$i18n.locale,'news')

      const data = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[active]=Y&filter[active_from]=${date}&sort=active_from:desc&fields=id,name,active_from,detail_text,detail_page_url,photo&limit=${limit}&page=${page}`)
      // console.log(data)

      commit('setPosts', data)
      commit('setDate', date)
    } catch (e) {
      console.log(e)
    }
  }
}