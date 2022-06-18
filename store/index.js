// state
export const state = () => ({
  _counter: 1
})

// getters
export const getters = {
  getCounter (state) {
    return state._counter
  }
}

// mutations
export const mutations = {
  increment (state) {
    state._counter++
  }
}

// actions
export const actions = {
  async nuxtServerInit ({ dispatch }, context) {
    await dispatch('users/getUsers')
  }
}
