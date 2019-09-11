import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Edit from '@/components/Edit'
import Add from '@/components/Add'
import All from '@/components/All'
import Navbar from '@/components/Navbar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Edit',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/Add',
      name: 'Add',
      component: Add
    },
    {
      path: '/All',
      name: 'All',
      component: All
    },
    {
      path: '/Navbar',
      name: 'Navbar',
      component: Navbar
    }

  ]
})
