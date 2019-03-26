import Vue from 'vue'
import Router from 'vue-router'
import Site from '@/pages/Site/Site'
import Search from '@/pages/Search/Search'
import Order from '@/pages/Order/Order'
import Profile from '@/pages/Profile/Profile'
import Login from '@/pages/Login/Login'

// 生命使用插件
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Site
    },
    {
      path: '/site',
      name: 'site',
      component: Site
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
