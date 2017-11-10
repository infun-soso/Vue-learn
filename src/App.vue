<template>
  <div id="app">
      <vheader></vheader>


      <!-- 底部固定页 -->
      <bottom-bar></bottom-bar>

      <!-- 歌单详情页 -->
      <!--<song-sheet></song-sheet>-->
  </div>
</template>

<script>
    import vheader from '@/components/vheader.vue'
    import bottombar from '@/components/bottombar.vue'
    import Vue from 'vue'
    import axios from 'axios'
    import Vueaxios from 'vue-axios'
    import store from './store'

    Vue.use(axios, Vueaxios)

    export default {
      name: 'app',
      data () {
        return {
          info: {}
        }
      },
      components: {
        vheader,
        'bottom-bar': bottombar
      },
      methods: {
        citysadd (data) {
          this.citys.push(data)
        }
      },
      created () {
        let LocalApi = 'static/data.json'
        axios.get(LocalApi).then((res) => {
          console.log(res)
          //    data.user的信息赋值给info 在通过组件的数据传递给SideBar
          this.info = res.data.user
          // 把所有的音乐数据给vuex的musicAllList
          store.dispatch('set_MusicAllList', res.data.music)
          // 所有的数据存起来 包括音乐个人信息 等等
          store.dispatch('set_AllInfo', res.data)
        })
      }
    }
</script>

<style scoped>
    @import '/static/css/button.min.css';
    @import '/static/font-icon/style.css';
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

    }
    *{
        margin: 0;
        padding: 0;
    }
    .citylist{
        margin-top: 10px;
    }
    .citylist li{
        margin-top: 10px;
        list-style: none;
        float: left;
    }

</style>
