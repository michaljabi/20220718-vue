<template>
  <code>&gt; Sprawdź konsolę...</code>
</template>

<script setup>
import { onMounted, onUnmounted, onBeforeMount, onBeforeUnmount } from "vue";

onBeforeMount(() => {
  console.log("beforeMount LifecycleMethod");
});

onMounted(() => {
  console.log("LifecycleMethod: mounted!");
});

onBeforeUnmount(() => {
  console.log("beforeUnmount LifecycleMethod");
});

onUnmounted(() => {
  console.log("LifecycleMethod: unmounted!");
});

/*
  // Alternatywnie [Options API]

export default {
  name: 'LifecycleMethods',
  beforeMount() {
    console.log('beforeMount LifecycleMethod');
  },
  mounted() {
    console.log('LifecycleMethod: mounted!');
  },
  beforeUnmount() {
    console.log('beforeUnmount LifecycleMethod');
  },
  unmounted() {
    console.log('LifecycleMethod: unmounted!');
  },
};

 */
</script>

<style scoped></style>
