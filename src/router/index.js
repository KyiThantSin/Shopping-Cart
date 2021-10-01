import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dishes from '../views/Dishes.vue'




const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dishes',
    name: 'Dishes',
    component: Dishes
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
