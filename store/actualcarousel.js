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
    // if (!arr.data || !arr.data.length) return
    for (let key in arr.data) {
      list.unshift(arr.data[key])
    }
    state.posts = list
  }
}

export const actions = {
  async fetchPosts ({ commit}) {
    const news = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=2&filter[actual_value]=${encodeURIComponent('Да')}&sort=active_from:desc&fields=id,name,active_from,code&limit=6?clear=Y`)
    commit('updatePosts', news)
  }
}