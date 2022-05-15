import { createRouter, createWebHashHistory } from 'vue-router'
import APIview from '../views/APIview.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/api',
    name: 'api',
    component: APIview
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
