import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Love from '@/components/love'

Vue.use(Router)

export default new Router({
//mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/love',
      name: 'love',
      component: Love
    }
  ]
})
