import config from '~/config'

export const state = () => ({
  page: {}
})

export const getters = {
  page (state) {
    return state.page
  }
}

export const mutations = {
  buildPage (state, arr) {
    if (!Object.keys(arr.data).length) {
      return state.page = null
    }

    let modifiered;
    for (let key in arr.data) {
      modifiered = arr.data[key]
    }

    // modifiered.ACTIVE_FROM = config.dateFormatter(modifiered.ACTIVE_FROM)
    // modifiered.VIDEO = modifiered.PROPERTIES.VIDEO_LINK.VALUE
    // modifiered.IMG = modifiered.PROPERTIES.PHOTO.VALUE 
    //     ? config.APIserver + modifiered.PROPERTIES.PHOTO.VALUE[0]
    //     : null
    
    state.page = modifiered
  }
}

export const actions = {
  async fetchPage ({ commit }, code) {
    try {
      //get locale iblock id from config
      const iblockID = config.getIblock(this.$i18n.locale,'pages')
      
      const page = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[active]=Y&filter[active_date]=Y&filter[CODE]=${code}&fields=id,name,detail_text`)
      commit('buildPage', page)
    } catch (e) {
      console.log(e)
    }
  }
}