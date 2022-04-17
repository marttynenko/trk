import config from '~/config'

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function cleanData(arr) {
  return arr.map(el => {
    const modifiered = {}

    modifiered.LINK = (el.PROPERTIES.LINK && el.PROPERTIES.LINK.VALUE) 
      ? el.PROPERTIES.LINK.VALUE
      : ''
    
    modifiered.IMG = (el.DETAIL_PICTURE && el.DETAIL_PICTURE.SRC)
      ? el.DETAIL_PICTURE.SRC
      : ''

    modifiered.ID = el.ID
    modifiered.IBLOCK_SECTION_ID = el.IBLOCK_SECTION_ID
    modifiered.NAME = el.NAME
    
    return modifiered
  })
}

const iblockID = '10'

export const state = () => ({
  banners: null,
  mainTopHorizontal: null,
  mainMidHorizontal: null,
  mainBottomHorizontal: null,
  mainRightVertical: null,
  mainMini: null,
  verticalAside: null
})

export const getters = {
  getBanners (state) {
    return state.banners
  },

  getMainTopHorizontal (state) {
    return state.mainTopHorizontal
  },

  getMainMidHorizontal (state) {
    return state.mainMidHorizontal
  },

  getMainBottomHorizontal (state) {
    return state.mainBottomHorizontal
  },

  getMainRightVertical (state) {
    return state.mainRightVertical
  },

  getMainMini (state) {
    return state.mainMini
  },

  getVerticalAside (state) {
    return state.verticalAside
  }
}

export const mutations = {
  setMainTopHorizontal (state, arr) {
    if (!Object.keys(arr.data).length) {
      return state.mainTopHorizontal = null
    }

    const list = []
    for (let key in arr.data) {
      list.unshift(arr.data[key])
    }

    const clean = cleanData(list)
    // console.log(clean)

    state.mainTopHorizontal = clean
  },

  setMainMidHorizontal (state, arr) {
    if (!Object.keys(arr.data).length) {
      return state.mainMidHorizontal = null
    }

    const list = []
    for (let key in arr.data) {
      list.unshift(arr.data[key])
    }

    const clean = cleanData(list)
    // console.log(clean)

    state.mainMidHorizontal = clean
  },

  setMainBottomHorizontal (state, arr) {
    if (!Object.keys(arr.data).length) {
      return state.mainBottomHorizontal = null
    }

    const list = []
    for (let key in arr.data) {
      list.unshift(arr.data[key])
    }

    const clean = cleanData(list)
    // console.log(clean)

    state.mainBottomHorizontal = clean
  },

  setMainRightVertical (state, arr) {
    if (!Object.keys(arr.data).length) {
      return state.mainRightVertical = null
    }

    const list = []
    for (let key in arr.data) {
      list.unshift(arr.data[key])
    }

    const clean = cleanData(list)
    // console.log(clean)

    state.mainRightVertical = clean
  },

  setMainMini (state, arr) {
    if (!Object.keys(arr.data).length) {
      return state.mainMini = null
    }

    const list = []
    for (let key in arr.data) {
      list.unshift(arr.data[key])
    }

    const clean = cleanData(list)
    // console.log(clean)

    state.mainMini = clean
  },

  setVerticalAside (state, arr) {
    if (!Object.keys(arr.data).length) {
      return state.verticalAside = null
    }

    const list = []
    for (let key in arr.data) {
      list.unshift(arr.data[key])
    }

    const clean = cleanData(list)
    // console.log(clean)

    state.verticalAside = clean
  },
}

export const actions = {
  async fetchMainTopHorizontal ({commit}) {
    try {
      // const iblockID = config.getIblock(this.$i18n.locale,'banners')
      // const iblockID = config.getIblock(this.$i18n.locale,'banners')
      
      const data = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[active]=Y&filter[IBLOCK_SECTION_ID]=29&sort=active_from:desc&fields=id,name,iblock_section_id,detail_picture,link&limit=20`)

      // console.log(data)

      commit('setMainTopHorizontal', data)
    } catch (e) {
      console.log(e)
    }
  },

  async fetchMainMidHorizontal ({commit}) {
    try {
      const data = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[active]=Y&filter[IBLOCK_SECTION_ID]=30&sort=active_from:desc&fields=id,name,iblock_section_id,detail_picture,link&limit=20`)

      // console.log(data)

      commit('setMainMidHorizontal', data)
    } catch (e) {
      console.log(e)
    }
  },

  async fetchMainBottomHorizontal ({commit}) {
    try {
      const data = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[active]=Y&filter[IBLOCK_SECTION_ID]=168&sort=active_from:desc&fields=id,name,iblock_section_id,detail_picture,link&limit=20`)

      // console.log(data)

      commit('setMainBottomHorizontal', data)
    } catch (e) {
      console.log(e)
    }
  },

  async fetchMainRightVertical ({commit}) {
    try {
      const data = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[active]=Y&filter[IBLOCK_SECTION_ID]=167&sort=active_from:desc&fields=id,name,iblock_section_id,detail_picture,link&limit=20`)

      // console.log(data)

      commit('setMainRightVertical', data)
    } catch (e) {
      console.log(e)
    }
  },

  async fetchMainMini ({commit}) {
    try {
      const data = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[active]=Y&filter[IBLOCK_SECTION_ID]=169&sort=active_from:desc&fields=id,name,iblock_section_id,detail_picture,link&limit=20`)

      // console.log(data)

      commit('setMainMini', data)
    } catch (e) {
      console.log(e)
    }
  },

  async fetchVerticalAside ({commit}) {
    try {
      const data = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[active]=Y&filter[IBLOCK_SECTION_ID]=28&sort=active_from:desc&fields=id,name,iblock_section_id,detail_picture,link&limit=20`)

      // console.log(data)

      commit('setVerticalAside', data)
    } catch (e) {
      console.log(e)
    }
  }
}