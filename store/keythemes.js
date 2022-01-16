import config from '~/config'

export const state = () => ({
  links: [],
  allLinks: [],
  posts: [],
  currentTheme: null
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
  }
}

export const mutations = {
  updateLinks (state, arr) {
    const list = []
    for (let key in arr.data) {
      list.push(arr.data[key])
    }
    state.links = list
  },

  updateAllLinks (state, arr) {
    const list = []
    for (let key in arr.data) {
      list.push(arr.data[key])
    }
    state.allLinks = list
  },

  updatePosts (state, arr) {
    const list = []
    for (let key in arr.data) {
      list.unshift(arr.data[key])
    }
    const clean = list.map(el => {
      const modifiered = {}
      modifiered.DETAIL_TEXT = el.DETAIL_TEXT.replace(/<\/?[^>]+>/ig, " ").substring(0,220)

      modifiered.IMG = (el.PROPERTIES.PHOTO && el.PROPERTIES.PHOTO.VALUE)
        ? config.APIserver + el.PROPERTIES.PHOTO.VALUE[0]
        : '/images/plugs/post-card.jpeg'

      modifiered.ACTIVE_FROM = el.ACTIVE_FROM
      modifiered.URL = '/news/'+el.CODE
      modifiered.ID = el.ID
      modifiered.NAME = el.NAME
      
      return modifiered
    })

    state.posts = clean
    // state.posts = state.posts.concat(clean)
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

      const data = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[active]=Y&fields=id,code,name&limit=4`)
      commit('updateLinks', data)
    } catch (e) {
      console.log(e)
    }
  },

  async fetchAllLinks ({commit}) {
    try {
      const iblockID = config.getIblock(this.$i18n.locale,'keythemes')

      const data = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[active]=Y&fields=id,code,name&limit=50`)
      commit('updateAllLinks', data)
    } catch (e) {
      console.log(e)
    }
  },

  async fetchTheme({commit},themeCode) {
    try {
      console.log(themeCode, 'from fetchTheme')
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
      // let themeID
      // if (state.currentTheme) {
      //   themeID = state.currentTheme.ID
      // } else {
      //   const iblockKeyID = config.getIblock(this.$i18n.locale,'keythemes')
      //   const req = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockKeyID}&filter[code]=${theme}&fields=id,code,name`)
      //   let obj
      //   for (let key in req.data) {
      //     obj = req.data[key]
      //   }
      //   themeID = obj.ID
      // }
      // console.log(themeID)

      // console.log(theme)
      // if (!state.currentTheme || state.currentTheme.CODE !== theme) {
      //   console.log(state.currentTheme, theme, 'from if fetchPosts')
      //   await dispatch('fetchTheme',theme)
      // }

      // console.log(iblockID,theme,page,limit)
      const url = `${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[keythemes_value]=${state.currentTheme.ID}&filter[active]=Y&fields=id,name,active_from,detail_text,detail_page_url,photo&limit=${limit}&page=${page}&clear=Y`
      // const url = `${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[keythemes_value]=${themeID}&filter[active]=Y&fields=id,name,active_from,detail_text,detail_page_url,photo&limit=${limit}&page=${page}&clear=Y`
      const data = await this.$axios.$get(url)

      commit('updatePosts', data)
    } catch (e) {
      console.log(e)
    }
  }
}