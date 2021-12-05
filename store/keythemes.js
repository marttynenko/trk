import config from '~/config'

export const state = () => ({
  links: [],
  posts: []
})

export const getters = {
  getLinks (state) {
    return state.links
  },

  getPosts (state) {
    return state.posts
  }
}

export const mutations = {
  updateLinks (state, arr) {
    const list = []
    for (let key in arr.data) {
      list.push(arr.data[key])
    }
    state.links = list
  },

  updatePosts (state, arr) {
    const list = []
    for (let key in arr.data) {
      list.push(arr.data[key])
    }
    state.posts = list
  },
}

export const actions = {
  async fetchLinks ({ commit}) {
    const data = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=1&fields=id,code,name&limit=4`)
    // console.log(data)
    commit('updateLinks', data)
  },

  async fetchPost({commit},theme) {
    const data = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=1&filter[code]=${theme}&fields=id,code,name&limit=4`)
    commit('updateLinks', data)
  }
}