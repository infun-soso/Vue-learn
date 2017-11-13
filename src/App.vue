<template>
  <div id="app">
      <audio src="" id="myaudio" ref="audio"></audio>
      <vheader></vheader>


      <!-- 底部固定页 -->
      <bottom-bar></bottom-bar>
      <!--音乐播放页，显示CD详情-->
      <music-detail></music-detail>
      <!-- 歌单详情页 -->
      <!--<song-sheet></song-sheet>-->
  </div>
</template>

<script>
    import vheader from '@/components/vheader.vue'
    import bottombar from '@/components/bottombar.vue'
    import musicdetail from '@/components/musicdetail.vue'
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
        'bottom-bar': bottombar,
        'music-detail': musicdetail
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
          // 设置音乐的地址 初始化 根据vuex的currentIndex决定
          this.$refs.audio.setAttribute('src', store.getters.getCurrentMusic.url)
          // 给audio元素存在VUEX的state里面 方便日后调用
          store.dispatch('set_AudioElement', this.$refs.audio)
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
