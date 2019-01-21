import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '../pages/index'
import classify from '../pages/classify'
import vip from '../pages/vip'
import carts from '../pages/carts'
import me from '../pages/me'
import delatis from '../pages/delatis'
import delList from '../pages/delList'
import login from '../pages/login'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify
    },
    {
      path: '/vip',
      name: 'vip',
      component: vip
    },
    {
      path: '/carts',
      name: 'carts',
      component: carts
    },
    {
      path: '/me',
      name: 'me',
      component: me
    },
    {
      path: '/delatis/:id',
      name: 'delatis',
      component: delatis
    },
    {
      path: '/delList',
      name: 'delList',
      component: delList
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
