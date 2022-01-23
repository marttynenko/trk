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
      list.unshift(arr.data[key])
    }

    const clean = list.map(el => {
      const modifiered = {}
 
      // modifiered.IMG = el.PROPERTIES.length && el.PROPERTIES.PHOTO.VALUE 
      modifiered.IMG = el.PROPERTIES && el.PROPERTIES.PHOTO
        ? config.APIserver + el.PROPERTIES.PHOTO.VALUE[0]
        : '/images/plugs/world-news-card.jpg'
      modifiered.URL = '/news/'+el.CODE

      modifiered.ACTIVE_FROM = config.dateFormatter(el.ACTIVE_FROM)
      modifiered.ID = el.ID
      modifiered.NAME = el.NAME
      
      return modifiered
    })

    state.posts = clean
  }
}

export const actions = {
  async fetchPosts ({ commit}) {
    try {
      const iblockID = config.getIblock(this.$i18n.locale,'news')

      const news = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[active]=Y&filter[in_the_world_value]=${encodeURIComponent('Да')}&sort=active_from:desc&fields=id,name,active_from,code,photo&limit=6`)
      
      commit('updatePosts', news)
    } catch (e) {
      console.log(e)
    }
  }
}