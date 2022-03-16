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
 
      // modifiered.IMG = el.PROPERTIES.length && el.PROPERTIES.PHOTO.VALUE 
      //   ? config.APIserver + el.PROPERTIES.PHOTO.VALUE[0]
      //   : '/images/plugs/last-news-card.jpeg'

      let img
      if (el.PROPERTIES.PHOTO && el.PROPERTIES.PHOTO.VALUE) {
        img = config.APIserver + el.PROPERTIES.PHOTO.VALUE[0]
      } else if (el.PROPERTIES.VIDEO_LINK && el.PROPERTIES.VIDEO_LINK.VALUE) {
        const videoChanks = el.PROPERTIES.VIDEO_LINK.VALUE.split('/')
        const videoID = videoChanks[videoChanks.length - 1]
        img = `//img.youtube.com/vi/${videoID}/default.jpg`
      } else {
        img = '/images/plugs/post-card.jpeg'
      }
      modifiered.IMG = img

      modifiered.URL = '/news/'+el.CODE
      modifiered.ACTIVE_FROM = config.dateFormatter(el.ACTIVE_FROM)
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
    try {
      const iblockID = config.getIblock(this.$i18n.locale,'news')

      const news = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[active]=Y&sort=active_from:desc&fields=id,name,active_from,code,photo,video_link&limit=12`)
      commit('updatePosts', news)
    } catch (e) {
      console.log(e)
    }
  }
}