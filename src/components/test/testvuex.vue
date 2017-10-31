<template>
  <div>
    <p></p>
    <h1>{{count}}</h1>
  </div>
</template>

<script>
  import store from './store1'
  export default {
    name: 'testaaa',
    computed: {
      count () {
        return store.state.count
      }
    }
  }
</script>

<style>
</style>
