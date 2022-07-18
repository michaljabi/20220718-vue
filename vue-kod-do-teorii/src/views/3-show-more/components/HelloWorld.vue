<template>
  <div>
    To musi być {{ upperToday }}
    <div>
      Sprawdź sposób działania <code>$textTransform</code> dostarczone przez
      <code>stringManipulationPlugin.js</code>
      <br />
      Przykład: <mark>{{ lowerCasedWord }}</mark> i użycie
      {{ $textTransform.toUpper("bezpośrednio na widoku") }}
    </div>
  </div>
</template>

<script setup>
import { ref, inject, computed } from "vue";
const $textTransform = inject("textTransform");
const upperCasedWord = ref("NIE KRZYCZ!");
const today = ref("dzisiaj");

const upperToday = computed(() => $textTransform.toUpper(today.value));
const lowerCasedWord = computed(() =>
  $textTransform.toLower(upperCasedWord.value)
);

/*
  // Alternatywnie [Options API]

export default {
  name: 'HelloWorld',
  data() {
    return {
      upperCasedWord: 'NIE KRZYCZ!',
      today: 'dzisiaj',
    };
  },
  computed: {
    upperToday() {
      return this.$textTransform.toUpper(this.today);
    },
    lowerCasedWord() {
      return this.$textTransform.toLower(this.upperCasedWord);
    },
  },
};

 */
</script>

<style scoped>
div {
  margin-bottom: 30px;
}
</style>
