import { createRouter, createWebHistory } from 'vue-router'
// import AuctionsView from '../views/AuctionsView.vue'
import AuctionsView from '@/views/AuctionsView.vue'
import PromotionsView from '@/views/PromotionsView.vue'
import AdvicesView from '@/views/AdvicesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auctions',
      component: AuctionsView
    },
    // Zadanie: dodaj konfigurację do ścieżek promotions i advices
    {
      path: '/promotions',
      component: PromotionsView
    },
    {
      path: '/advices',
      component: AdvicesView
    }
  ]
})

export default router
