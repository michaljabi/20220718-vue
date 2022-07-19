<script setup>
import { ref } from 'vue'
defineProps({
  text: {
    type: String,
    default: 'Hello'
  }
})

const counter = ref(0); 
</script>

<template>
    <header class="p-5 mb-4 bg-light rounded-3">
        <h1 @click="counter++">{{text}} {{counter}}</h1>
    </header>
</template>