import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/Form'
import Stitch from '@/components/Stitch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Form',
      component: Form
    },
    {
      path: '/log',
      name: 'Stitch',
      component: Stitch
    }
  ]
})
