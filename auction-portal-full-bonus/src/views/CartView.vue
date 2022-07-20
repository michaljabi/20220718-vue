<script setup>
import { useCartStore } from '@/stores/cart'
const cartStore = useCartStore()
</script>

<template>
  <h2>Koszyk</h2>
  <div>
    <ul class="list-group">
      <li
        class="list-group-item d-flex"
        style="height: 120px"
        v-for="item in cartStore.cartItems"
        :key="item.id"
      >
        <img
          :src="item.imgUrl"
          :alt="item.title"
          style="max-width: 120px"
          class="img-fluid mr-4"
        />
        <div class="w-100">
          <h5 class="mb-1">{{ item.title }}</h5>
          <small>{{ item.price }}</small>
          <p>{{ item.description }}</p>
        </div>
      </li>
    </ul>
  </div>
  <div>Suma koszyka: {{ cartStore.cartItemsSum }}</div>
</template>
