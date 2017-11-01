import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = {
  state: {
    count: 1,
    userinfo: 'wangyanfeng',
    password: '123',
    todos: [
      {id: 1, text: '1111', done: false},
      {id: 2, text: '2222', done: true},
      {id: 3, text: '3333', done: false}
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
}

export default store
