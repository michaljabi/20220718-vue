<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheMenu from './components/TheMenu.vue'
</script>

<template>
  <TheHeader text="Auction Portal" />
  <div class="container">
    <TheMenu />
    <RouterView />
  </div>
</template>

<style scoped></style>
