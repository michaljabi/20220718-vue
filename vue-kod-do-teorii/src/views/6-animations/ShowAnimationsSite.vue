<template>
  <div>
    <h1>6. Animacje</h1>
    <h2>Prosty efekt z CSS <code>transition</code></h2>
    <SimpleTransition />
    <h2>Efekt zastosowany przy zmianie strony CSS <code>animations</code></h2>
    <SimpleAnimation />
  </div>
</template>

<script setup>
import SimpleTransition from "./components/SimpleTransition.vue";
import SimpleAnimation from "./components/SimpleAnimation.vue";

/*
  // Alternatywnie [Options API]

export default {
  name: 'ShowAnimationsSite',
  components: { SimpleAnimation, SimpleTransition },
};

 */
</script>

<style scoped></style>
