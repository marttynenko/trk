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
  }
}

export const actions = {
  async fetchPosts ({ commit}) {
    try {
      const locale = this.$i18n.locale
      const IDs = await this.$axios.$get(`${config.APIserver}/api/now_browsering?lang=${locale}`)
      
      const iblockID = config.getIblock(locale,'news')
      const arr = []
      let filterString = ''

      if (IDs && IDs.data && IDs.data.length) {

        const max = Math.max(10,IDs.data.length)
        
        for (let i = 0; i < max; i++) {
          filterString += `filter[id][]=${IDs.data[i]}&`
        }

        const data = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[active]=Y&filter[active_date]=Y&${filterString}fields=id,name,active_from,code&limit=10`)
        commit('updatePosts', data)
      }
    } catch (e) {
      console.log(e)
    }
  },

  async postToNow({}, id) {
    try {
      const data = {
        lang: this.$i18n.locale,
        id: id
      }

      await this.$axios.$post(`${config.APIserver}/api/now_browsering/`,data)
    } catch (e) {
      console.log(e)
    }
  }
}