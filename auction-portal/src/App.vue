<script setup>
import TheHeader from './components/TheHeader.vue';
import TheMenu from './components/TheMenu.vue';

const myNumber = 2;
</script>

<template>
  <TheHeader :text="'Auction Portal ' + myNumber"/> 
  <TheMenu />

</template>

<style scoped></style>
