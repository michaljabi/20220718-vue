<template>
  <div>
    <h2>Komponent do oceniania:</h2>
    <h3>Oceń nas</h3>
    <div>
      <code>({{ rate }})</code>
      <span v-for="index in rate" :key="index">⭐</span>
    </div>
    <label>
      <input type="range" min="1" max="5" v-model.number="rate" />
    </label>
    <div>
      <button @click="handleVoteClick()">Głosuj !</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useVotesStore } from "@/stores/votes";

const voteStore = useVotesStore();
const rate = ref(5);

function handleVoteClick() {
  voteStore.vote(rate.value);
}
</script>

<style scoped>
h3 {
  margin-top: 0;
}
</style>
