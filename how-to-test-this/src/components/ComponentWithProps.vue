<script setup>
import { shape, number, string } from 'vue-types'

defineProps({
  auction: shape({
    title: string().isRequired,
    imgUrl: string(),
    description: string(),
    price: number().isRequired,
  }).def(() => {
    return {
      title: 'Przykładowa aukcja',
      imgUrl: 'https://picsum.photos/id/189/400/400',
      description: 'brak opisu...',
      price: 100,
    }
  }),
  cardWidth: number().def(200),
})
</script>

<template>
  <div class="card" :style="{ width: cardWidth + 'px' }">
    <div class="card-header">{{ auction.title }}</div>
    <img class="card-img" :src="auction.imgUrl" />
    <div class="card-body">
      <p class="card-text">{{ auction.description }}</p>
      <div class="d-flex justify-content-between align-content-center">
        <strong> {{ auction.price }} zł</strong>
      </div>
    </div>
  </div>
</template>
