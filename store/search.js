import config from '~/config'

export const state = () => ({
  results: [],
  resultsMoreData: true,
  counters: {}
})

export const getters = {
  getResults (state) {
    return state.results
  },

  getMoreData(state) {
    return state.resultsMoreData
  },

  getCounters (state) {
    return state.counters
  }
}

export const mutations = {
  updateResults (state, arr) {
    const list = []
    for (let key in arr.data) {
      list.unshift(arr.data[key])
    }

    const clean = list.map(el => {
      const modifiered = {}
      // modifiered.DETAIL_TEXT = el.DETAIL_TEXT.replace(/<\/?[^>]+>/ig, " ").substring(0,220)
      modifiered.SEARCH_RES = el.BODY.substring(0,220)

      // modifiered.IMG = (el.PICTURE && el.PICTURE.SRC) 
      //   ? config.APIserver + el.PICTURE.SRC
      //   : '/images/plugs/post-card.jpeg'

      let img
      if (el.PICTURE && el.PICTURE.SRC) {
        img = config.APIserver + el.PICTURE.SRC
      } else if (el.VIDEO_LINK) {
        const videoChanks = el.VIDEO_LINK.split('/')
        const videoID = videoChanks[videoChanks.length - 1]
        img = `//img.youtube.com/vi/${videoID}/0.jpg`
      } else {
        img = '/images/plugs/post-card.jpeg'
      }
      modifiered.IMG = img

      // modifiered.ACTIVE_FROM = el.DATE_FROM
      modifiered.ACTIVE_FROM = config.dateFormatter(el.DATE_FROM,this.$i18n.locale)
      modifiered.URL = '/news/'+el.CODE
      modifiered.ID = el.ID
      modifiered.NAME = el.TITLE.replace(/<\/?[^>]+>/ig, " ").replace(/&quot;/g, '\"')
      
      return modifiered
    })

    state.results = clean

    //определяем есть ли еще данные
    state.resultsMoreData = config.checkMoreData(arr.nav,10)

    state.counters = arr.nav
  }
}

export const actions = {
  async fetchResults ({ commit}, {query, page = 1}) {
    try {
      const data = await this.$axios.$post(`${config.APIserver}/api/search/?q=${encodeURIComponent(query)}&filter[active_date]=Y&limit=10&PAGEN_1=${page}`)

      // console.log(data)
      
      commit('updateResults', data)
    } catch (e) {
      console.log(e)
    }
  }
}