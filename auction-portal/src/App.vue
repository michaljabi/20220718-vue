<script setup>
import TheHeader from './components/TheHeader.vue';
import TheMenu from './components/TheMenu.vue';
import AuctionsView from './views/AuctionsView.vue';

const myNumber = 2;
</script>

<template>
  <TheHeader :text="'Auction Portal ' + myNumber"/> 
  <main class="container">
    <TheMenu />
    <AuctionsView />
  </main>
</template>

<style scoped></style>
