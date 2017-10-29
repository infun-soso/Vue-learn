import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Community from '@/components/community'
import MyMusic from '@/components/mymusic'
import FindMusic from '@/components/findmusic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/community',
      name: 'Community',
      component: Community
    },
    {
      path: '/mymusic',
      name: 'mymusic',
      component: MyMusic
    },
    {
      path: '/findmusic',
      name: 'findmusic',
      component: FindMusic
    }
  ]
})
