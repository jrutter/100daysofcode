import Vue from 'vue'
import Router from 'vue-router'
import Add from '@/components/Add'
import List from '@/components/List'
import Register from '@/components/user/Register'
import Login from '@/components/user/Login'
import Email from '@/components/user/Confirm'

Vue.use(Router)

export const routesArray = {
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Add Stash',
      component: Add,
      meta: 'active'
    },
    {
      path: '/log',
      name: 'Stash Log',
      component: List,
      meta: 'active'
    },
    {
      path: '/user/register',
      name: 'Register',
      component: Register,
      meta: 'active'
    },
    {
      path: '/user/login',
      name: 'Log in',
      component: Login,
      meta: 'active'
    },
    {
      path: '/confirm',
      name: 'Confirm Email',
      component: Email,
      meta: 'inactive'
    }
  ]
}
export default new Router(routesArray)
