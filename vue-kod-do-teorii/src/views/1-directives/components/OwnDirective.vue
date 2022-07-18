<template>
  <ul>
    <li v-for="el in elements" :key="el" v-bg-highlight>{{ el }}</li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

const elements = ref(["Element 1", "Element 2"]);

/*
  // Alternatywnie [Options API]

export default {
  name: 'OwnDirective',
  data() {
    return {
      elements: ['Element 1', 'Element 2'],
    };
  },
};

*/
</script>

<style scoped>
ul {
  list-style: none;
}
</style>
