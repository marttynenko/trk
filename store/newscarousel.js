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
    if (!Object.keys(arr.data).length) {
      return state.posts = []
    }

    const list = []
    for (let key in arr.data) {
      const el = arr.data[key]
      el.ACTIVE_FROM = config.dateFormatter(el.ACTIVE_FROM,this.$i18n.locale)
      list.unshift(el)
      // list.unshift(arr.data[key])
      // config.dateFormatter(el.ACTIVE_FROM)
    }
    state.posts = list
  }
}

export const actions = {
  async fetchPosts ({ commit}) {
    try {
      const iblockID = config.getIblock(this.$i18n.locale,'news')

      const news = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[news_slider_value]=${encodeURIComponent('Да')}&filter[active]=Y&sort=active_from:desc&fields=id,name,active_from,code&limit=12?clear=Y`)
      commit('updatePosts', news)
    } catch (e) {
      console.log(e)
    }
  }
}