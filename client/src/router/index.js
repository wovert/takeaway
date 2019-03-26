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
      component: Site,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/site',
      name: 'site',
      component: Site,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
