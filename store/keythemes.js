import config from '~/config'

export const state = () => ({
  links: [],
  allLinks: [],
  posts: [],
  currentTheme: null,
  postsMoreData: true
})

export const getters = {
  getLinks (state) {
    return state.links
  },

  getAllLinks(state) {
    return state.allLinks
  },

  getPosts (state) {
    return state.posts
  },

  getCurrentTheme (state) {
    return state.currentTheme
  },

  getMoreData(state) {
    return state.postsMoreData
  }
}

export const mutations = {
  updateLinks (state, arr) {
    const list = []
    for (let key in arr.data) {
      list.push(arr.data[key])
    }

    list.sort((a,b)=> {
      return +b.SORT - +a.SORT
    })

    state.links = list
  },

  updateAllLinks (state, arr) {
    const list = []
    for (let key in arr.data) {
      list.push(arr.data[key])
    }

    list.sort((a,b)=> {
      return +b.SORT - +a.SORT
    })

    state.allLinks = list
  },

  updatePosts (state, arr) {
    const list = []
    for (let key in arr.data) {
      list.unshift(arr.data[key])
    }
    const clean = list.map(el => {
      const modifiered = {}
      // modifiered.DETAIL_TEXT = el.DETAIL_TEXT.replace(/<\/?[^>]+>/ig, " ").substring(0,220)

      // modifiered.IMG = (el.PROPERTIES.PHOTO && el.PROPERTIES.PHOTO.VALUE)
      //   ? config.APIserver + el.PROPERTIES.PHOTO.VALUE[0]
      //   : '/images/plugs/post-card.jpeg'
      let img, text

      if (el.PROPERTIES.SHORT_TEXT && el.PROPERTIES.SHORT_TEXT.VALUE && el.PROPERTIES.SHORT_TEXT.VALUE.TEXT && typeof el.PROPERTIES.SHORT_TEXT.VALUE.TEXT === 'string') {
        // text = el.PROPERTIES.SHORT_TEXT.VALUE.TEXT.trim().replace(/<\/?[^>]+>/ig, " ")
        text = el.PROPERTIES.SHORT_TEXT.VALUE.TEXT.replace(/&lt;\/?\D&gt;|&quot;/ig,'')
      } else {
        text = el.DETAIL_TEXT.replace(/<\/?[^>]+>/ig, " ").substring(0,220)
      }
      modifiered.DETAIL_TEXT = text

      if (el.PROPERTIES.PHOTO && el.PROPERTIES.PHOTO.VALUE) {
        img = config.APIserver + el.PROPERTIES.PHOTO.VALUE[0]
      } else if (el.PROPERTIES.VIDEO_LINK && el.PROPERTIES.VIDEO_LINK.VALUE) {
        img = config.ytParser(el.PROPERTIES.VIDEO_LINK.VALUE,'0')
      } else {
        img = '/images/plugs/post-card.jpeg'
      }
      modifiered.IMG = img

      modifiered.ACTIVE_FROM = config.dateFormatter(el.ACTIVE_FROM,this.$i18n.locale)
      modifiered.URL = '/news/'+el.CODE
      modifiered.ID = el.ID
      modifiered.NAME = el.NAME
      
      return modifiered
    })

    state.posts = clean
    // state.posts = state.posts.concat(clean)

    state.postsMoreData = config.checkMoreData(arr.nav, 10)
  },

  updateCurrentTheme(state,obj) {
    // console.log(obj)
    state.currentTheme = obj
  },

  updateThemeBackend(state,arr) {
    for (let key in arr.data) {
      state.currentTheme = arr.data[key]
    }
  }
}

export const actions = {
  
  async fetchLinks ({commit}) {
    try {
      const iblockID = config.getIblock(this.$i18n.locale,'keythemes')

      const data = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[active]=Y&sort=sort:desc&fields=id,code,name,sort&limit=4`)
      commit('updateLinks', data)
    } catch (e) {
      console.log(e)
    }
  },

  async fetchAllLinks ({commit}) {
    try {
      const iblockID = config.getIblock(this.$i18n.locale,'keythemes')

      const data = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[active]=Y&sort=sort:desc&fields=id,code,name,sort&limit=50`)
      commit('updateAllLinks', data)
    } catch (e) {
      console.log(e)
    }
  },

  async fetchTheme({commit},themeCode) {
    try {
    
      const iblockKeyID = config.getIblock(this.$i18n.locale,'keythemes')
      const req = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockKeyID}&filter[code]=${themeCode}&fields=id,code,name`)
 
      commit('updateThemeBackend',req)
    } catch (e) {
      console.log(e)
    }
  },

  async fetchPosts({commit,state},{theme, page = 1, limit = 10}) {
    try {
      const iblockID = config.getIblock(this.$i18n.locale,'news')
      
      const url = `${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[keythemes_value]=${state.currentTheme.ID}&filter[active]=Y&sort=active_from:desc&fields=id,name,active_from,detail_text,short_text,detail_page_url,photo,video_link&limit=${limit}&page=${page}`
      const data = await this.$axios.$get(url)

      commit('updatePosts', data)
    } catch (e) {
      console.log(e)
    }
  }
}