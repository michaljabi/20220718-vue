<template>
  <div>
    <h1>7. Stan globalny aplikacji</h1>
    <section class="flex-container">
      <div>
        <h2>Ocena portalu:</h2>
        <h6>Wasza ocena: {{ rating }}⭐</h6>
        Ilość głosów: <strong>{{ totalVotes }}</strong>
      </div>
      <StarRating />
    </section>
    <section class="explanation">
      <p>
        <a
          href="https://pinia.vuejs.org/"
          target="_blank"
          rel="noopener noreferrer"
          >Pinia</a
        >
        - jest zalecanym managerem stanu w nowym Vue3.
      </p>
      <p>
        Integruje się z nowoczesnym podejściem <strong>Composition API</strong>,
        jednak nic nie stoi na przeszkodzie aby używać ją z
        <strong>Options API</strong>
      </p>
      <p>
        Jest oficjalnym następcą Vuex 5 - ma bardzo podobne
        <code>API</code> odchudzone (bez potrzeby używania dodatkowych "mutacji"
        do zmiany stanu) i podzielone "per store" by design.
      </p>
    </section>
  </div>
</template>

<script setup>
import { computed } from "vue";
import StarRating from "./components/StarRating.vue";
import { useVotesStore } from "@/stores/votes";

const votesStore = useVotesStore();
const totalVotes = computed(() => votesStore.totalVotes);
const rating = computed(() => votesStore.rating);

/*
  // Alternatywnie [Options API]

import { mapState } from 'pinia'

export default {
  name: 'GlobalStateSite',
  components: { StarRating },
  computed: {
    ...mapState(useVotesStore, ['totalVotes', 'rating']),
  },
};

 */
</script>

<style scoped>
.flex-container {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}
</style>
