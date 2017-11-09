import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1,
    userinfo: 'wangyanfeng',
    password: '123',
    todos: [
      {id: 1, text: '1111', done: false},
      {id: 2, text: '2222', done: true},
      {id: 2, text: '2222', done: true},
      {id: 2, text: '2222', done: true},
      {id: 3, text: '3333', done: true}
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => getters.doneTodos.length
  },
  mutations: {
    increment (state, payload) {
      state.count = state.count + payload.amount
    },
    decrement (state, payload) {
      state.count--
    }
  },
  actions: {
    increment ({state, commit}, payload) {
      setTimeout(() => {
        commit('increment', payload)
      }, 3000)
    },
    decrement ({commit}) {
      commit('decrement')
    }
  }
})

export default store
