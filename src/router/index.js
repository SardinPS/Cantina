import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Add from '@/components/Add'
import All from '@/components/All'
import Recipe from '@/components/Recipe'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
      path: '/Recipe/:id',
      name: 'Recipe',
      component : Recipe,
  }
  ]
})
