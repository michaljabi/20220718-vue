<template>
  <header @click="handleAddExclamation">
    <h1>{{ title }} {{ exclamations }}</h1>
    <h2>{{ subTitle }}</h2>
  </header>
</template>

<script setup>
import { ref } from "vue";
/**
 * Ten przykład jest istotny z pkt. widzenia przygotowanego do niego testu:
 * {@link ../../tests/unit/TheHeader.spec.js}
 *
 * Testy uruchomisz komendą: npm run test:unit
 * Zauważ, że testowaniu podlega ZACHOWANIE KOMPONENTU!
 * - testujemy go tak, jak użytkownik by to robił "ręcznie" sprawdzając DOM.
 * - nie interesują nas szczegóły implementacji
 *
 * Przykładowo: z pkt. widzenia testu, nie ma znaczenia czy exclamations jest obliczane na widoku,
 * czy jednak zdecydujemy się użyć metody: `handleAddExclamation()`
 *
 * nie ma również znaczenia czy używamy Composition API czy Options API !
 * */
defineProps({
  title: {
    type: String,
    default: "Przykładowy tytuł...",
  },
  subTitle: {
    type: String,
  },
});
const exclamations = ref("");

function handleAddExclamation() {
  exclamations.value += "❗";
}
</script>

<style scoped>
header {
  color: #42b983;
  text-align: center;
}
</style>
