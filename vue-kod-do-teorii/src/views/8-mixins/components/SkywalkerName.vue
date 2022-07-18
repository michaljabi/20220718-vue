<template>
  <div>
    <span v-if="loading">Loading Name...</span>
    <span v-else-if="errorMessage"> Błąd: {{ errorMessage }} 😭</span>
    <strong v-else>Name: {{ skywalker.name }}</strong>
  </div>
</template>

<script>
import { skywalkerPreloaderMixin } from "../skywalkerLoaderMixin";

export default {
  name: "SkywalkerName",
  mixins: [skywalkerPreloaderMixin],
};
</script>
