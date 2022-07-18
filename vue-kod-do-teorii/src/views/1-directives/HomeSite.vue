<template>
  <div>
    <h1>1. Dyrektywy</h1>
    <h2>Użycie <code>v-if, v-on</code>, binding i reaktywność:</h2>
    <div v-if="isVisible">Jestem tutaj !</div>
    <button @click="isVisible = !isVisible">Show it !</button>
    <h2>Użycie <code>v-for</code> do iteracji po elementach widoku:</h2>
    <ShoppingList />
    <h2>Użycie bindowania do atrybutu <code>style</code>:</h2>
    <ApplyStyling />
    <h2>Własna dyrektywa <code>v-bg-highlight</code>:</h2>
    <OwnDirective />
    <p>Została ona dodana (zdefiniowana) w pliku <code>main.js</code></p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import OwnDirective from "./components/OwnDirective.vue";
import ApplyStyling from "./components/ApplyStyling.vue";
import ShoppingList from "./components/ShoppingList.vue";

const isVisible = ref(true);

/*
  // Alternatywnie [Options API]

export default {
  name: 'HomeSite',
  components: {
    OwnDirective,
    ApplyStyling,
    ShoppingList,
  },
  data() {
    return {
      isVisible: true,
    };
  },
};

*/
</script>
