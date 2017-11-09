<template>
  <div>
    <p></p>
    <h1>{{count}}</h1>
      <button @click="increment">+1</button>
      <button @click="decrement">-1</button>
    <h2>{{ userinfo }}</h2>
    <h2>{{ password }}</h2>


      <h3 @click="alertd">{{ localcomputed }}</h3>

      <h4>{{ doneTodos }}</h4>

    <span style="color: orangered;">{{ doneTodosCount }}</span>
    <p style="color: #000;background: blanchedalmond" @click="adds">Mutations</p>

  </div>

</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  export default {
    name: 'testaaa',
    data () {
      return {
        localcount: 'hello'
      }
    },
    computed: {
      localcomputed () {
        return this.localcount.split('').reverse().join('')
      },
//      doneTodosCount () {
//        return this.$store.state.todos.filter(todo => todo.done)
//      },
      ...mapGetters([
        'doneTodos',
        'doneTodosCount'
      ]),
      ...mapState([
        'count',
        'userinfo',
        'password'
      ])

    },
    methods: {
      alertd () {
        console.log(this.doneTodos[0].id)
      },
      adds () {
        this.increment({amount: 10})
      },
      ...mapActions([
        'increment',
        'decrement'
      ])
  }
//      count () {
//        return this.$store.state.count
//      }

  }
</script>

<style>
</style>
