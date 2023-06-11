import config from '~/config'

const watherAPIkey = '1befacfcd56f1b2aba5dea1368552166'

const NodeCache = require( "node-cache" );
const myCache = new NodeCache();

export const state = () => ({
  currency: null,
  weather: null
})

export const getters = {
  getCurrency (state) {
    return state.currency
  },
  getWeather (state) {
    return state.wather
  }
}

export const mutations = {
  buildCurrency (state, arr) {
    if (!arr || !arr.length) {
      return state.currency = null
    }

    const modifiered = arr.filter(el => el.Cur_ID == 431 || el.Cur_ID == 451 || el.Cur_ID == 456)
    
    state.currency = modifiered
  },

  buildWeather (state, obj) {
    if (!obj) {
      return state.weather = null
    }

    state.wather = obj
  }
}



export const actions = {
  async fetchCurrency ({ commit }) {
    try {
      const data = await this.$axios.$get(`https://www.nbrb.by/api/exrates/rates?periodicity=0`)
      commit('buildCurrency', data)
    } catch (e) {
      console.log(e)
    }
  },

  async fetchWeather ({ commit }) {
    try {

      const data = await this.$axios.$get(`https://api.openweathermap.org/data/2.5/weather?q=Homel,By&appid=${watherAPIkey}&units=metric`)
      commit('buildWeather', data)
    } catch (e) {
      console.log(e)
    }
  }
}