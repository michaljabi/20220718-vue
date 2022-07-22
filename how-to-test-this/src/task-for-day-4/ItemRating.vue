<script>
const MAX_RATE = 5
const MIN_RATE = 1
</script>

<script setup="">
import { ref } from 'vue'
import { number } from 'vue-types'

const props = defineProps({
  startRating: number().def(MAX_RATE),
})

const currentRating = ref(props.startRating)

function addRate(amount) {
  const { value } = currentRating
  const rating = value + amount
  const isBetweenExpectedValues = rating >= MIN_RATE && rating <= MAX_RATE
  if (isBetweenExpectedValues) {
    currentRating.value = rating
  }
}
</script>

<template>
  <section>
    <code>({{ currentRating }})</code>
    <span v-for="index in currentRating" :key="index">⭐</span>
    <div class="p-2">
      <button class="btn btn-secondary" @click="addRate(-1)">-</button>
      <button class="btn btn-primary mx-2" @click="addRate(1)">+</button>
    </div>
  </section>
</template>
