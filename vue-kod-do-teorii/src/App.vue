<script setup>
import { RouterView } from "vue-router";
import TheHeader from "@/components/TheHeader.vue";
import TheMainMenu from "@/components/TheMainMenu.vue";
</script>

<template>
  <TheHeader
    title="Single Page Application"
    sub-title="przykład organizacji kodu i struktury aplikacji"
  />
  <img class="logo" src="./assets/logo.svg" alt="vue logo" />
  <TheMainMenu />
  <RouterView v-slot="{ Component }">
    <transition name="slide" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>

<style scoped>
.logo {
  width: 50px;
  display: block;
  margin: 5px auto 20px;
}

.slide-enter-active {
  animation: slide-in 0.2s ease-in;
}

.slide-leave-active {
  animation: slide-out 0.2s ease-out;
}

@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translateX(-20%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-out {
  100% {
    opacity: 0;
    transform: translateX(20%);
  }
}
</style>
