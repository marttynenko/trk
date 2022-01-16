export const state = () => ({
  popupName: 'WroteUs',
  isOpen: false,
})

export const getters = {
  getPopup (state) {
    return state.popupName
  },

  getStatus (state) {
    return state.isOpen
  }
}

export const mutations = {
  updatePopup (state, value) {
    state.popupName = value
  },

  openPopup (state) {
    state.isOpen = true
    document.documentElement.classList.add('non-overflow')
  },

  closePopup (state) {
    state.isOpen = false
    document.documentElement.classList.remove('non-overflow')
  }
}
