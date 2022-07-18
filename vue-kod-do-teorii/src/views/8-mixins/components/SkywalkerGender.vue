<template>
  <div>
    <span v-if="loading">Loading Gender...</span>
    <span v-else-if="errorMessage"> Błąd ładowania Gender 😭</span>
    <span v-else>Gender: {{ skywalker.gender }}</span>
  </div>
</template>

<script>
import { skywalkerPreloaderMixin } from "../skywalkerLoaderMixin";

export default {
  name: "SkywalkerGender",
  mixins: [skywalkerPreloaderMixin],
};
</script>
