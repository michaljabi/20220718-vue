<script setup>
import { RouterView } from 'vue-router';
import TheHeader from './components/TheHeader.vue';
import TheMenu from './components/TheMenu.vue';


const myNumber = 2;
</script>

<template>
  <TheHeader :text="'Auction Portal ' + myNumber"/> 
  <main class="container">
    <TheMenu />
    <RouterView />
  </main>
</template>

<style scoped></style>
