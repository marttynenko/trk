import config from '~/config'

export const state = () => ({
  posts: []
})

export const getters = {
  getPosts (state) {
    return state.posts
  }
}

export const mutations = {
  updatePosts (state, arr) {
    const list = []
    for (let key in arr.data) {
      list.unshift(arr.data[key])
    }
    const clean = list.map(el => {
      const modifiered = {}

      modifiered.URL = '/news/'+el.CODE

      modifiered.ACTIVE_FROM = config.dateFormatter(el.ACTIVE_FROM,this.$i18n.locale)
      modifiered.ID = el.ID
      modifiered.NAME = el.NAME
      
      return modifiered
    })

    state.posts = clean
    // state.posts = state.posts.concat(clean)
  }
}

export const actions = {
  async fetchPosts ({ commit}) {
    try {
      const iblockID = config.getIblock(this.$i18n.locale,'news')

      const news = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[active]=Y&sort=active_from:desc&fields=id,name,active_from,code&limit=12&page=2`)
      commit('updatePosts', news)
    } catch (e) {
      console.log(e)
    }
  }
}