import { defineStore } from 'pinia'

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    items: [],
  }),
  getters: {
    cartItems: (state) => state.items,
    countCartItems: (state) => state.items.length,
    cartItemsSum: (state) =>
      state.items.map((a) => a.price).reduce((a, b) => a + b, 0),
  },
  actions: {
    addItemToCart(auction) {
      this.items.push(auction)
    },
  },
})
