<template>
    <div class="myCommunity">
        尽情期待!Community
      <testaaa></testaaa>
    </div>

</template>

<script>
  import testvuex from './test/testvuex.vue'
    export default {
      name: 'Community',
      components: {
        'testaaa': testvuex
      }
    }
</script>

<style>
    .myCommunity{

        position:fixed;
        background:#fff;
        overflow:auto;
        top:50px;
        bottom:46px;
        left:0;
        right:0;
        z-index:911111;
        -webkit-overflow-scrolling:touch;
    }
</style>
