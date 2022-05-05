import config from '~/config'

export const state = () => ({
  posts: [],
  post: null,
  postsMoreData: true,
  currentPage: 0
})

export const getters = {
  allPosts (state) {
    return state.posts
  },

  firstPosts(state) {
    return state.posts.length <= 10
      ? state.posts
      : state.posts.slice(0,10)
  },

  getMoreData(state) {
    return state.postsMoreData
  },

  getPost(state) {
    return state.post
  }
}

export const mutations = {
  updateList (state, arr) {
    const list = []
    for (let key in arr.data) {
      list.unshift(arr.data[key])
    }

    const clean = list.map(el => {
      const modifiered = {}
      modifiered.DETAIL_TEXT = el.DETAIL_TEXT.replace(/<\/?[^>]+>/ig, " ").substring(0,220)

      // modifiered.IMG = (el.PROPERTIES.PHOTO && el.PROPERTIES.PHOTO.VALUE) 
      //   ? config.APIserver + el.PROPERTIES.PHOTO.VALUE[0]
      //   : '/images/plugs/post-card.jpeg'

      let img
      if (el.PROPERTIES.PHOTO && el.PROPERTIES.PHOTO.VALUE) {
        img = config.APIserver + el.PROPERTIES.PHOTO.VALUE[0]
      } else if (el.PROPERTIES.VIDEO_LINK && el.PROPERTIES.VIDEO_LINK.VALUE) {
        const videoChanks = el.PROPERTIES.VIDEO_LINK.VALUE.split('/')
        const videoID = videoChanks[videoChanks.length - 1]
        img = `//img.youtube.com/vi/${videoID}/0.jpg`
      } else {
        img = '/images/plugs/post-card.jpeg'
      }
      modifiered.IMG = img

      modifiered.ACTIVE_FROM = config.dateFormatter(el.ACTIVE_FROM,this.$i18n.locale)
      modifiered.URL = '/about/press/'+el.CODE
      modifiered.ID = el.ID
      modifiered.NAME = el.NAME
      
      return modifiered
    })

    state.posts = clean
    // state.posts = state.posts.concat(clean)

    //определяем есть ли еще данные
    state.postsMoreData = config.checkMoreData(arr.nav,10)
  },

  updatePage(state, arr) {
    state.currentPage = arr.nav.currentPage
  },


  buildPost (state, arr) {
    if (!Object.keys(arr.data).length) {
      return state.post = null
    }

    let modifiered;
    for (let key in arr.data) {
      modifiered = arr.data[key]
    }

    modifiered.ACTIVE_FROM = config.dateFormatter(modifiered.ACTIVE_FROM,this.$i18n.locale)
    modifiered.VIDEO = modifiered.PROPERTIES.VIDEO_LINK.VALUE
    modifiered.IMG = modifiered.PROPERTIES.PHOTO.VALUE 
        ? config.APIserver + modifiered.PROPERTIES.PHOTO.VALUE[0]
        : null
    
    state.post = modifiered
  }
}

export const actions = {
  async fetchNews ({ commit }, {page = 1, limit = 10}) {
    try {
      //get locale iblock id from config
      // const iblock = config.iblocks[this.$i18n.locale].news
      const iblockID = config.getIblock(this.$i18n.locale,'press')

      const news = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[active]=Y&sort=active_from:desc&fields=id,name,active_from,detail_text,detail_page_url,photo,video_link&limit=${limit}&page=${page}`)
      commit('updateList', news)
    } catch (e) {
      console.log(e)
    }
  },

  async fetchPost ({ commit }, code) {
    //get locale iblock id from config
    const iblockID = config.getIblock(this.$i18n.locale,'press')
    
    const post = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[CODE]=${code}&fields=id,name,active_from,detail_text,preview_text,detail_page_url,video_link,photo`)
    commit('buildPost', post)
  }
}