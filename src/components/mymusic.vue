<template>
    <div class="myMusic">
	    <type-list name="我的音乐" iconinfo="icon-music" count="28" :playing="true"></type-list>
      <type-list name="我的音乐" iconinfo="icon-music" count="28" :playing="true"></type-list>
      <type-list name="我的音乐" iconinfo="icon-music" count="28" :playing="true"></type-list>
      <type-list name="我的音乐" iconinfo="icon-music" count="28" :playing="true"></type-list>

    </div>
</template>

<script>
  import typelist from './typelist.vue'
  export default {
    name: 'Music',
    components: {
      'type-list': typelist
    }
  }
</script>

<style>
    .myMusic{
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
