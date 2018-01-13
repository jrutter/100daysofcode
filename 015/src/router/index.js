import Vue from 'vue'
import Router from 'vue-router'
import Add from '@/components/Add'
import List from '@/components/List'
import Register from '@/components/Register'
import Login from '@/components/Login'

Vue.use(Router)

export const routesArray = {
  routes: [
    {
      path: '/',
      name: 'Add Stash',
      component: Add
    },
    {
      path: '/log',
      name: 'Stash Log',
      component: List
    },
    {
      path: '/user/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/user/login',
      name: 'Log in',
      component: Login
    }
  ]
}
export default new Router(routesArray)
