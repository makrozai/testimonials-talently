// state
export const state = () => ({
  alert: {
    state: false,
    content: '',
    type: 'error'
  }
})

// getters
export const getters = {
  alert (state) {
    return state.alert
  }
}

// mutations
export const mutations = {
  updateAlert (state, payload) {
    /**
     * @type { SUCCESS INFO WARNING ERROR }
     * @content { string }
     */
    state.alert = {
      ...payload,
      timeOut: 3000
    }
  }
}

// actions
export const actions = {
  async nuxtServerInit ({ dispatch }, context) {
    await dispatch('users/getUsers')
  }
}
