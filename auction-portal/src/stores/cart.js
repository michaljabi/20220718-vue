import { defineStore } from 'pinia'

export const useCartStore = defineStore({
    id: 'cart',
    state: () => {
        return {
            items: []
        }
    },
    getters: {
        allItemsCount: (state) => state.items.length
    },
    actions: {
        addToCart(auction) {
            this.items.push(auction);
        }
    }
})