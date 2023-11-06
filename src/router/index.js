// import Landing on app start, other views are imported dynamically
import Landing from '../views/Landing.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing
  },
  {
    path: '/project/:id',
    name: 'project',
    component: () => import('../views/Project.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
