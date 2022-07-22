import { createRouter, createWebHistory } from 'vue-router'
import PresentComponentsToTestView from '@/views/PresentComponentsToTestView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: PresentComponentsToTestView,
    },
  ],
})

export default router
