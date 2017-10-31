<template>
    <div class="myMusic">
	    <type-list name="我的音乐" iconinfo="icon-music" count="28" :playing="true"></type-list>
        <type-list name="最近播放" iconinfo="icon-zuijinplay" count="18" :playing="false"></type-list>
        <type-list name="我的电台" iconinfo="icon-diantai" count="1" :playing="false"></type-list>
        <type-list name="我的收藏" iconinfo="icon-collect" count="3" :playing="false" :has-border="false"></type-list>
        <!--<music-sheet v-for="(item, index) in items" :item="item" :index="index" :key="item.id"></music-sheet>-->

    </div>
</template>

<script>
  import typelist from './typelist.vue'
  import musicsheet from './musicsheet.vue'
  export default {
    name: 'Music',
    computed: {
      items () {
        return this.$store.getters.getMusicAllList.sheets
      }
    },
    components: {
      'type-list': typelist,
      'music-sheet': musicsheet
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
