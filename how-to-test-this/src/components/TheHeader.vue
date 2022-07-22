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
  background-image: url('https://picsum.photos/id/425/2000/400');
  background-position: center;
  color: #100202;
  border-bottom: 2px solid #492424;
}
</style>
