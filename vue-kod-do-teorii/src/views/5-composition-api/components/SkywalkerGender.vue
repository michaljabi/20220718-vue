<template>
  <div>
    <span v-if="loading">Loading Gender...</span>
    <span v-else-if="errorMessage"> Błąd ładowania Gender 😭</span>
    <span v-else>Gender: {{ skywalker.gender }}</span>
  </div>
</template>

<script>
import { useSkywalker } from "../useSkywalker";

export default {
  name: "SkywalkerGender",
  setup() {
    const { errorMessage, loading, skywalker } = useSkywalker();
    return { errorMessage, loading, skywalker };
  },
};
</script>
