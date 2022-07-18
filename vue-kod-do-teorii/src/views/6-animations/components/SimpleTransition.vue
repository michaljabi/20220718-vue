<template>
  <section class="d-flex">
    <button class="btn" @click="show = !show">Przełącz!</button>
    <Transition name="fade">
      <div class="hello" v-if="show">hello</div>
    </Transition>
    <div class="box">
      <a
        href="https://vuejs.org/guide/built-ins/transition.html#css-based-transitions"
        target="_blank"
        rel="noopener noreferrer"
        >Transition Classes</a
      >
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const show = ref(false);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
