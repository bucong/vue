import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Love from '@/components/love'
import Error from '@/components/error'

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
    },{
		  path: '*',
		  name: 'error',
		  component: Error
		}
  ]
})
