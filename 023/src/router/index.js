import Vue from 'vue'
import Router from 'vue-router'
import Add from '@/components/Add'
import List from '@/components/List'
import Callback from '@/components/Callback'
import Home from '@/components/Home'
import Profile from '@/components/Profile'

Vue.use(Router)

export const routesArray = {
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: 'active'
    },
    {
      path: '/add',
      name: 'Add Stash',
      component: Add,
      meta: 'active'
    },
    {
      path: '/log',
      name: 'My Stash',
      component: List,
      meta: 'active'
    },
    {
      path: '/callback',
      name: 'Callback',
      component: Callback,
      meta: 'inactive'
    },
    {
      path: '/profile',
      name: 'My Profile',
      component: Profile,
      meta: 'active'
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
}
export default new Router(routesArray)
