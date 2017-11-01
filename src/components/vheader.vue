<template>
    <header>
        <div class="header-container">
            <i class="menu icon-menu"></i>
            <div class="centermenu">
                <router-link tag="i" to="/mymusic">
                    <!--:class= "selectIndex===0?'active':''"-->
                    <i class="music icon-music"  ></i>
                </router-link>
                <router-link tag="i" to="/findmusic">
                    <i class="find icon-wangyi"></i>
                </router-link>
                <router-link tag="i" to="/community">
                    <i class="community icon-community"></i>
                </router-link>
            </div>
            <!-- <router-link tag="i" to="/search"> -->
            <i class="search icon-search"></i>
            <!-- </router-link> -->
            <router-view></router-view>
            <!-- <Counter class="counter"></Counter> -->
        </div>
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
        position:fixed;
        top:0;
        left:0;
        right:0;
        height:50px;
        z-index:10;
        background:#c62f2f;
    }
    .header-container{
        height:100%;
        display:flex;
        align-items:center;
        justify-content:space-between;
    }
    .icon-menu,.icon-search{
        color:#fff;
        font-size:26px;
        padding:10px 15px;
    }
    .counter{
        position:absolute;
        background:green;
        width:600px;
        height:150px;
        color:#fff;
        font-size:20px;
        top:0;
        left:120px;
    }
    .conter p{
        height:30px;
        line-height:30px;
    }
    .centermenu{
        font-size:24px
    }
    .centermenu i{
        margin:0 5px;
        color:#eee;
    }
    .contermenu i.active{
        color:#4AE0A8
    }
    .router-link-active i{
        color:#ccafaf;
    }
</style>
