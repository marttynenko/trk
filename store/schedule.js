import config from '~/config'

export const state = () => ({
  activeDate: '',
  schedule: []
})

export const getters = {
  getSchedule (state) {
    return state.schedule
  },

  getActiveDate() {
    return state.activeDate
  }
}

export const mutations = {
  setDate(state,value) {
    state.activeDate = value
  },

  setSchedule (state, arr) {
    if (!Object.keys(arr.data).length) {
      return state.schedule = []
    }

    const list = []
    for (let key in arr.data) {
      list.push(arr.data[key])
    }

    const clean = list.map(el => {
      const modifiered = {}

      modifiered.ID = el.ID
      modifiered.NAME = el.NAME
      modifiered.DESCR = el.PROPERTIES.SHORT_DESCRIPTION.VALUE

      let date = new Date(el.ACTIVE_FROM)
      modifiered.TIME = new Intl.DateTimeFormat('ru-RU', {
        hour: '2-digit', minute: '2-digit'
      }).format(date)

      modifiered.DATE = date

      return modifiered
    })


    state.schedule = clean
  }
}

export const actions = {
  
  async fetchSchedule ({commit},date) {
    try {
      const iblockID = config.getIblock(this.$i18n.locale,'schedule')

      const data = await this.$axios.$get(`${config.APIserver}/api/element/?filter[iblock_id]=${iblockID}&filter[active]=Y&filter[active_from]=${date}&sort=active_from:desc&fields=id,name,short_description,active_from,detail_picture&limit=50`)

      // console.log(data)

      commit('setSchedule', data)
      commit('setDate', date)
    } catch (e) {
      console.log(e)
    }
  }
}