// state
export const state = () => ({
  users: []
})

// getters
export const getters = {
  users (state) {
    return state.users
  }
}

// mutations
export const mutations = {
  getUsers (state, payload) {
    state.users = payload
  },
  createUser (state, payload) {
    state.users.push(payload)
  }
}

// actions
export const actions = {
  async getUsers ({ commit }) {
    try {
      const { data } = await this.$axios.get('https://api-challenge-talently.vercel.app/api/users')

      commit('getUsers', data.result)
      return data.result
    } catch (error) {
      alert.error(error)
    }
  },
  async createUser ({ commit }, payload) {
    try {
      const { data } = await this.$axios.post('https://api-challenge-talently.vercel.app/api/users/add', payload)

      const user = {
        ...payload,
        id: data.id
      }

      commit('createUser', user)
      return user
    } catch (error) {
      alert(error)
    }
  }
}
