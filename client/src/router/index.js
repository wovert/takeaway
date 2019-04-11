import Vue from 'vue'
import Router from 'vue-router'
import Site from '@/pages/Site/Site'
import Search from '@/pages/Search/Search'
import Order from '@/pages/Order/Order'
import Profile from '@/pages/Profile/Profile'
import Login from '@/pages/Login/Login'

import Shop from '@/pages/Shop/Shop'
import ShopGoods from '@/pages/Shop/ShopGoods/ShopGoods'
import ShopInfo from '@/pages/Shop/ShopInfo/ShopInfo'
import ShopRatings from '@/pages/Shop/ShopRatings/ShopRatings'

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
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods,
          name: 'shopGoods'
        },
        {
          path: '/shop/ratings',
          component: ShopRatings,
          name: 'shopRatings'
        },
        {
          path: '/shop/info',
          component: ShopInfo,
          name: 'shopInfo'
        },
        {
          path: '',
          redirect: '/shop/goods'
        }
      ]
    }
  ]
})
