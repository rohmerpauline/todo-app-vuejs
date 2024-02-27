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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ToDoView.vue')
    },
    {
      path: '/done',
      name: 'done',
      component: () => import('../views/DoneView.vue')
    },
    {
      path: '/create-task',
      name: 'create-task',
      component: () => import('../views/CreateTaskView.vue')
    }
  ]
})

export default router
