// state
export const state = () => ({
  users: [],
  user: {}
})

// getters
export const getters = {
  users (state) {
    return state.users
  },
  user (state) {
    return state.user
  }
}

// mutations
export const mutations = {
  getUsers (state, payload) {
    state.users = payload
  },
  createUser (state, payload) {
    state.users.push(payload)
  },
  getUser (state, payload) {
    state.user = payload
  },
  deleteUser (state, payload) {
    const index = state.users.findIndex(item => item.id === payload)

    if (index > -1) {
      state.users.splice(index, 1)
    }
  }
}

// actions
export const actions = {
  deleteUser ({ commit }, id) {
    return new Promise((resolve, reject) => {
      this.$axios.delete(`https://api-challenge-talently.vercel.app/api/users/delete/${id}`)
        .then(({ data }) => {
          commit('deleteUser', data.id)

          resolve(data.id)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  getUser ({ commit }, id) {
    return new Promise((resolve, reject) => {
      this.$axios.get(`https://api-challenge-talently.vercel.app/api/users/${id}`)
        .then(({ data }) => {
          const user = {
            ...data.result,
            id
          }

          commit('getUser', user)

          resolve(user)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  getUsers ({ commit }) {
    return new Promise((resolve, reject) => {
      this.$axios.get('https://api-challenge-talently.vercel.app/api/users')
        .then(({ data }) => {
          commit('getUsers', data.result)

          resolve(data.result)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  createUser ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios.post('https://api-challenge-talently.vercel.app/api/users/add', payload)
        .then(({ data }) => {
          const user = {
            ...payload,
            id: data.id
          }

          commit('createUser', user)
          resolve(user)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
