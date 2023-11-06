// import Landing on app start, other views are imported dynamically
import Landing from '../views/Landing.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Landing,
    beforeEnter: (to, from) => {
      console.log('inside vue router')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
