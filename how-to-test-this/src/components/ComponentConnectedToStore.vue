<script setup>
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
</script>

<template>
  <div class="m-3">
    <button class="btn btn-warning mb-3" @click="counterStore.increment()">
      Kliknięto {{ counterStore.counter }} razy
    </button>
    <p>Podwojona wartość to: {{ counterStore.doubleCount }}</p>
  </div>
</template>
