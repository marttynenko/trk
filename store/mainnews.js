import config from '~/config'

export const state = () => ({
  post: null
})

export const getters = {
  getPost (state) {
    return state.post
  }
}

export const mutations = {
  buildPost (state, arr) {
    if (!Object.keys(arr.data).length) {
      return state.post = null
    }

    let modifiered;
    for (let key in arr.data) {
      modifiered = arr.data[key]
    }

    let img
    if (modifiered.PROPERTIES.PHOTO && modifiered.PROPERTIES.PHOTO.VALUE) {
      img = config.APIserver + modifiered.PROPERTIES.PHOTO.VALUE[0]
    } else if (modifiered.PROPERTIES.VIDEO_LINK && modifiered.PROPERTIES.VIDEO_LINK.VALUE) {
      const videoChanks = modifiered.PROPERTIES.VIDEO_LINK.VALUE.split('/')
      const videoID = videoChanks[videoChanks.length - 1]
      img = `//img.youtube.com/vi/${videoID}/hqdefault.jpg`
    } else {
      img = '/images/plugs/main-news.jpeg'
    }
    modifiered.IMG = img
    
    state.post = modifiered
  }
}

export const actions = {
  async fetchPost ({ commit }) {
    try {
      const iblockID = config.getIblock(this.$i18n.locale,'news')

      const post = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[active]=Y&filter[main_news_value]=${encodeURIComponent('Да')}&fields=id,name,video_link,detail_text,preview_text,detail_page_url,photo&limit=1`)
      commit('buildPost', post)
    } catch (e) {
      console.log(e)
    }
  }
}