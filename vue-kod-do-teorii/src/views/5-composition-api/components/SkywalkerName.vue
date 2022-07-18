<template>
  <div>
    <span v-if="loading">Loading Name...</span>
    <span v-else-if="errorMessage"> Błąd: {{ errorMessage }} 😭</span>
    <strong v-else>Name: {{ skywalker.name }}</strong>
  </div>
</template>

<script>
import { useSkywalker } from "../useSkywalker";

export default {
  name: "SkywalkerName",
  setup() {
    const { errorMessage, loading, skywalker } = useSkywalker();
    return { errorMessage, loading, skywalker };
  },
};
</script>
