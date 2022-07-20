<script setup>
defineProps({
  text: {
    type: String,
    default: 'Auction Portal',
  },
})
</script>

<template>
  <header class="p-5 mb-4 bg-light rounded-3">
    <h1>{{ text }}</h1>
  </header>
</template>

<style scoped>
header {
  background-image: url('https://picsum.photos/id/180/2000/400');
  text-shadow: #f6f5f5 2px 2px 2px;
  color: #212121;
}
</style>
