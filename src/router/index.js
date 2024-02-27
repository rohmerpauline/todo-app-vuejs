import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/dashboard'
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: HomeView
    },
    {
      path: '/to-do',
      name: 'to-do',
      component: () => import('../views/ToDoView.vue')
    },
    {
      path: '/done',
      name: 'done',
      component: () => import('../views/DoneView.vue')
    },
    {
      path: '/create-task/:id?',
      name: 'create-task',
      component: () => import('../views/CreateTaskView.vue')
    }
  ]
})

export default router
