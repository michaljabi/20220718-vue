import { createRouter, createWebHistory } from 'vue-router'
// import AuctionsView from '../views/AuctionsView.vue'
import AuctionsView from '@/views/AuctionsView.vue'
import PromotionsView from '@/views/PromotionsView.vue'
import AdvicesView from '@/views/AdvicesView.vue'
import Page404View from '@/views/Page404View.vue'
import AddAuctionView from '@/views/AddAuctionView.vue'
import CartView from '@/views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/', 
      redirect: '/auctions'
    },
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
    },
    { 
      path: '/add-auction', 
      component: AddAuctionView
    },
    { 
      path: '/cart',
      component: CartView
    },
    {
      path: '/:pathMatch(.*)*',
      component: Page404View
    }
  ]
})

export default router
