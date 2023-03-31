import config from '~/config'

export const state = () => ({
  tag: null,
})

export const getters = {
  getTag (state) {
    return state.tag
  },
}

export const mutations = {
  updateTag(state,arr) {
    // console.log(arr.data, arr.data.length, typeof arr.data)
    for (let key in arr.data) {
      state.tag = arr.data[key]
    }
  }
}

export const actions = {

  async fetchTags({commit},name) {
    try {
    
      const iblockKeyID = config.getIblock(this.$i18n.locale,'meta')
      const req = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockKeyID}&filter[name]=${encodeURIComponent(name)}&fields=title,description`)
 
      commit('updateTag',req)
    } catch (e) {
      console.log(e)
    }
  }
}