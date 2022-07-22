<script setup>
import TheHeader from '@/components/TheHeader.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <TheHeader text="How to test this?" />
  <main class="container">
    <RouterView />
  </main>
</template>
