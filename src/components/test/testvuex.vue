<template>
  <div>
    <p></p>
    <h1>{{count}}</h1>
    <h2>{{ userinfo }}</h2>
    <h2>{{ password }}</h2>
      <h3>{{ localcomputed }}</h3>
      <h4>{{ doneTodoCount }}</h4>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
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
      doneTodoCount () {
        return this.$store.getters.doneTodos
      },
      ...mapState([
        'count',
        'userinfo',
        'password'
      ])
    },
    methods: {
    }
//      count () {
//        return this.$store.state.count
//      }

  }
</script>

<style>
</style>
