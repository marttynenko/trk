import config from '~/config'

export const state = () => ({
  status: false,
  config: {
    bg: 'white',
    fz: 18,
    ls: 0,
    lh: 1,
    imgs: 'nobright',
    gray: false
  }
})

export const getters = {
  getStatus(state) {
    return state.status
  },

  getConfig(state) {
    return state.config
  },

  getClasses(state) {
    if (!state.status) return null

    let classes = ''
    for (let key in state.config) {
      classes += `vi-${key}-${state.config[key]} `
    }
    return classes
  }
}

export const mutations = {
  toggleStatus(state) {
    if (state.status) {
      // localStorage.removeItem('viConfig')
      localStorage.removeItem('viStatus')
    } else {
      localStorage.setItem('viStatus',true)
      if (!localStorage.getItem('viConfig')) {
        localStorage.setItem('viConfig',JSON.stringify(state.config))
      }
    }
    state.status = !state.status
  },

  setValue(state, {type, value}) {
    if (type === 'fz') {
      if (value === 'plus') {
        value = state.config.fz + 1
      } else if (value === 'minus') {
        value = state.config.fz - 1
      }
      value = Math.min(Math.max(12, value), 30)
    }
    state.config[type] = value
  },

  setConfig(state, storage) {
    state.config = storage
  }
}

export const actions = {
  
}