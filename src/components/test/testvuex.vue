<template>
  <div>
    <p></p>
    <h1>{{count}}</h1>
    <h2>{{ userinfo }}</h2>
    <h2>{{ password }}</h2>


      <h3 @click="alertd">{{ localcomputed }}</h3>

      <h4>{{ doneTodos }}</h4>

    <span style="color: orangered;">{{ doneTodosCount }}</span>
    <p style="color: #000;background: blanchedalmond" @click="adds">Mutations</p>

  </div>

</template>

<script>
  import { mapState, mapGetters, mapMutations } from 'vuex'
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
        this.add({amount: 10})
      },
      ...mapMutations({
        add: 'increment'
      })

  }
//      count () {
//        return this.$store.state.count
//      }

  }
</script>

<style>
</style>
