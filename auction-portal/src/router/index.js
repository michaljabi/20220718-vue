import { createRouter, createWebHistory } from 'vue-router'
// import AuctionsView from '../views/AuctionsView.vue'
import AuctionsView from '@/views/AuctionsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auctions',
      component: AuctionsView
    }
    // Zadanie: dodaj konfigurację do ścieżek promotions i advices
  ]
})

export default router
