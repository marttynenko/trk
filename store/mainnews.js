import config from '~/config'

export const state = () => ({
  post: {}
})

export const getters = {
  getPost (state) {
    return state.post
  }
}

export const mutations = {
  buildPost (state, arr) {
    let modifiered;
    for (let key in arr.data) {
      modifiered = arr.data[key]
    }

    // modifiered.VIDEO = modifiered.PROPERTIES.VIDEO_LINK.VALUE
    modifiered.IMG = modifiered.PROPERTIES.PHOTO.VALUE 
        ? config.APIserver + modifiered.PROPERTIES.PHOTO.VALUE[0]
        : null
    
    state.post = modifiered
  }
}

export const actions = {
  async fetchPost ({ commit }) {

    const post = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=2&fields=id,name,detail_text,preview_text,detail_page_url,photo&limit=1`)
    // const post = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=2&filter[MAIN_NEWS]=${code}&fields=id,name,active_from,detail_text,preview_text,detail_page_url,photo`)
    commit('buildPost', post)
  }
}