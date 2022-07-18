<template>
  <section class="w-500">
    <transition-group name="slide">
      <button class="btn" v-if="step === 1" @click="step++" :key="1">
        Slide
      </button>
      <button class="btn" v-else-if="step === 2" @click="step++" :key="2">
        Me
      </button>
      <button class="btn" v-else-if="step === 3" @click="step++" :key="3">
        To
      </button>
      <button class="btn" v-else-if="step === 4" @click="step++" :key="4">
        The
      </button>
      <button class="btn" v-else @click="step = 1" :key="5">Right</button>
    </transition-group>
  </section>
</template>

<script setup>
import { ref } from "vue";
const step = ref(1);

/*
  // Alternatywnie [Options API]

export default {
  name: 'SimpleAnimation',
  data() {
    return {
      step: 1,
    };
  },
};

 */
</script>

<style scoped>
.w-500 {
  width: 500px;
  margin: auto;
  position: relative;
}
.btn {
  font-size: 2em;
  padding: 10px;
  display: inline-block;
  position: absolute;
}
.slide-enter-active {
  animation: slide-in 0.5s ease-in;
}
.slide-leave-active {
  animation: slide-out 0.5s ease-out;
}
@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translateX(-80%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes slide-out {
  100% {
    opacity: 0;
    transform: translateX(80%);
  }
}
</style>
