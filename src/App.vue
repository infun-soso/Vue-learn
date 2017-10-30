<template>
  <div id="app">
      <vheader></vheader>
      <!--<img src="./assets/logo.png">
          <router-view/>
          <ul class="citylist">
              <li v-for="item in citys">
                  <div class="svg-wrapper">
                      <svg height="40" width="150" >
                          <rect id="shape" height="40" width="150" xmlns="http://www.w3.org/2000/svg"/>
                      </svg>
                      <div id="text">
                          <a href="###"><span class="spot"></span>{{ item }}</a>
                      </div>
                  </div>
              </li>
          </ul>
      <vfooter :citylist="citys" @citysadd="citysadd"></vfooter>-->
  </div>
</template>

<script>
    import vheader from '@/components/vheader.vue'
    export default {
      name: 'app',
      data () {
        return {
          citys: ['北京', '上海', '杭州', '武汉', '迈阿密']
        }
      },
      components: {
        vheader
      },
      methods: {
        citysadd (data) {
          this.citys.push(data)
        }
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
