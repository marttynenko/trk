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

      modifiered.ACTIVE_FROM = el.ACTIVE_FROM
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
    const news = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=2&sort=active_from:desc&fields=id,name,active_from,code&limit=12&page=2`)
    commit('updatePosts', news)
  }
}