<script>
const MAX_RATE = 5
const MIN_RATE = 1

const isBetweenExpectedValues = (value) =>
  value >= MIN_RATE && value <= MAX_RATE
</script>

<script setup="">
import { ref } from 'vue'
import { number } from 'vue-types'

const props = defineProps({
  startRating: number().def(MAX_RATE),
})

const numberOfStars = isBetweenExpectedValues(props.startRating)
  ? props.startRating
  : MAX_RATE
const currentRating = ref(numberOfStars)

function addRate(amount) {
  const { value } = currentRating
  const rating = value + amount
  if (isBetweenExpectedValues(rating)) {
    currentRating.value = rating
  }
}
</script>

<template>
  <section>
    <code>({{ currentRating }})</code>
    <span data-testid="star" v-for="index in currentRating" :key="index"
      >⭐</span
    >
    <div class="p-2">
      <button data-testid="dec" class="btn btn-secondary" @click="addRate(-1)">
        -
      </button>
      <button
        data-testid="inc"
        class="btn btn-primary mx-2"
        @click="addRate(1)"
      >
        +
      </button>
    </div>
  </section>
</template>
