import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/Form'
import Stitch from '@/components/Stitch'
import Register from '@/components/Register'
import Login from '@/components/Login'

Vue.use(Router)

export const routesArray = {
  routes: [
    {
      path: '/',
      name: 'Add Stash',
      component: Form
    },
    {
      path: '/log',
      name: 'Stash Log',
      component: Stitch
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
