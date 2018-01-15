import Vue from 'vue'
import Router from 'vue-router'
import Add from '@/components/Add'
import List from '@/components/List'
import Register from '@/components/user/Register'
import Login from '@/components/user/Login'
import Confirm from '@/components/user/Confirm'
import Password from '@/components/user/Password'
import Reset from '@/components/user/Reset'

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
      name: 'Log',
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
      component: Confirm,
      meta: 'inactive'
    },
    {
      path: '/reset',
      name: 'Reset',
      component: Reset,
      meta: 'inactive'
    },
    {
      path: '/user/password',
      name: 'Reset Password',
      component: Password,
      meta: 'inactive'
    }
  ]
}
export default new Router(routesArray)
