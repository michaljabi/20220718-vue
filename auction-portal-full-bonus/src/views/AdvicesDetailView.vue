<script setup>
import { useRoute } from 'vue-router'

const route = useRoute();
</script>

<template>
  <h3 class="my-3">Wybrany artykuł</h3>
  <pre>
    {{ route.params }}
  </pre>
</template>
