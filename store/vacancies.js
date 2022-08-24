import config from '~/config'

export const state = () => ({
  vacancies: null,
  categories: null
})

export const getters = {
  getVacancies (state) {
    return state.vacancies
  },

  getCategories (state) {
    return state.categories
  }
}

export const mutations = {
  setVacancies (state, arr) {
    if (!Object.keys(arr.data).length) {
      return state.vacancies = null
    }

    const list = []
    for (let key in arr.data) {
      arr.data[key].SALARY = arr.data[key].PROPERTIES.SALARY.VALUE
      list.unshift(arr.data[key])
    }

    // modifiered.SALARY = modifiered.PROPERTIES.SALARY.VALUE 
    //   ? modifiered.PROPERTIES.SALARY.VALUE
    //   : ''

    state.vacancies = list
  },

  setCategories(state, arr) {
    if (!Object.keys(arr.data).length) {
      return state.categories = null
    }

    const list = []
    for (let key in arr.data) {
      list.unshift(arr.data[key])
    }
    
    state.categories = list
  }
}

export const actions = {
  async fetchVacancies ({ commit }) {
    try {
      //get locale iblock id from config
      const iblockID = config.getIblock(this.$i18n.locale,'vacancies')
      
      const res = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[active]=Y&sort=active_from:desc&fields=id,name,PREVIEW_TEXT,SALARY`)
      commit('setVacancies', res)
    } catch (e) {
      console.log(e)
    }
    
  },

  async fetchCategories ({ commit }) {
    try {
      //get locale iblock id from config
      // const iblockID = config.getIblock(this.$i18n.locale,'vacanciesCats')
      const iblockID = config.getIblock(this.$i18n.locale,'vacancies')
      
      const res = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[active]=Y&sort=active_from:desc&fields=id,name`)
      commit('setCategories', res)
    } catch (e) {
      console.log(e)
    }
    
  }
}