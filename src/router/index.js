import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/views/home')
const Love = () => import('@/views/love')
const Error = () => import('@/views/error')

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
