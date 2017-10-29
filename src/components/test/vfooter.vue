<template>
    <footer>
        <ul>
            <li v-for="item in citylist">{{ item }}</li>
        </ul>
        <input type="text" v-model="city">
        <button @click="addcity">点击增加</button>

    </footer>
</template>

<script>
    export default {
      name: 'vfooter',
      data () {
        return {
          city: ''
        }
      },
      props: {
        citylist: {
          type: Array,
          default: []
        }
      },
      methods: {
        addcity () {
          this.$emit('citysadd', this.city)
        }
      }
    }
</script>

<style>
    footer{
        width: 100%;
        height: 50px;
        background: #f63838;
        text-align: center;
        line-height: 50px;
        color: #ffffff;
        position: fixed;
        bottom: 0;
    }
    footer ul{
        display: flex;
        justify-content: space-around;
    }
    footer ul li{
        list-style: none;

    }
    button {
        position: absolute;
        top:-10px;
    }
    input{
        position: absolute;
        top:-50px;
    }
</style>