<script setup>
import TheHeader from './components/TheHeader.vue';

const myNumber = 2;
</script>

<template>
  <TheHeader :text="'Auction Portal ' + myNumber"/> 
</template>

<style scoped></style>
