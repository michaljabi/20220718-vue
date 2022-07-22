<script setup>
import { ref, computed } from 'vue'
const timeOfTheDay = ref('dzisiaj')
const actualWeather = computed(() => `${timeOfTheDay.value} padało`)
const changeTimeOfTheDay = () => {
  timeOfTheDay.value = timeOfTheDay.value === 'dzisiaj' ? 'wczoraj' : 'dzisiaj'
}
</script>

<template>
  <h4 data-testid="text">{{ actualWeather }}</h4>
  <button class="btn btn-primary" @click="changeTimeOfTheDay()">
    Zmień porę dnia
  </button>
</template>
