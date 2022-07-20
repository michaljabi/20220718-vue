import { useUserStore } from '@/stores/user'
import { createRouter, createWebHistory } from 'vue-router'

import AuctionsView from '@/views/AuctionsView.vue'
import AdvicesView from '@/views/AdvicesView.vue'
import AdvicesDetailView from '@/views/AdvicesDetailView.vue'
import AddAuctionView from '@/views/AddAuctionView.vue'
import CartView from '@/views/CartView.vue'
import LogInView from '@/views/LogInView.vue'
import The404View from '@/views/The404View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '', redirect: '/auctions' },
    { path: '/auctions', component: AuctionsView },
    {
      path: '/promotions',
      component: () => import('@/views/PromotionsView.vue'),
    },
    {
      path: '/advices',
      component: AdvicesView,
      children: [
        { name: 'article', path: ':id', component: AdvicesDetailView },
      ],
    },
    {
      path: '/add-auction',
      component: AddAuctionView,
      meta: {
        requireAuth: true,
      },
    },
    { path: '/shopping-cart', component: CartView },
    { path: '/log-in', component: LogInView },
    { path: '/:catchAll(.*)', component: The404View },
  ],
})

router.beforeEach((to) => {
  const userStore = useUserStore()
  if (to.meta.requireAuth && !userStore.isAuth) {
    return {
      path: '/log-in',
    }
  }
})

export default router
