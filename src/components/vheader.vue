<template>
    <header>
        <p>{{ msg }}</p>
    </header>
</template>

<script>
    export default {
      name: 'vheader',
      data () {
        return {
          msg: 'this is header'
        }
      }
    }
</script>

<style>
    header{
        width: 100%;
        height: 50px;
        background: #f63838;
        text-align: center;
        line-height: 50px;
        color: #ffffff;
        position: fixed;
        top: 0;
    }
</style>