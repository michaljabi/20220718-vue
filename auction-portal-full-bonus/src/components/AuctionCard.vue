<template>
  <div class="card">
    <div class="card-header">{{ auction.title }}</div>
    <img class="card-img" :src="auction.imgUrl" alt="" />
    <div class="card-body">
      <p class="card-text">{{ auction.description }}</p>
      <div class="d-flex justify-content-between align-content-center">
        <strong> {{ auction.price }} zł</strong>
        <button class="btn btn-primary" @click="$emit('addToCart', auction)">
          <FaIcon icon="cart-plus" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { shape, number, string, integer } from 'vue-types'
defineEmits(['addToCart'])

defineProps({
  auction: shape({
    id: integer().isRequired,
    imgUrl: string().isRequired,
    title: string().isRequired,
    price: number().isRequired,
    description: string(),
  }).def({
    id: 0,
    imgUrl: 'https://picsum.photos/id/76/200/200',
    description: 'Opis 51625621',
    title: 'Hello title',
    price: 6720,
  }).loose,
})
</script>
