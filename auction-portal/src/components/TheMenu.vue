<script setup>
    import { ref } from 'vue'

    const isMenuShown = ref(true)

    function handleMenuToggle() {
        isMenuShown.value = !isMenuShown.value
    }
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- <button class="navbar-toggler" type="button" @click="isMenuShown = !isMenuShown"> -->
    <button class="navbar-toggler" type="button" @click="handleMenuToggle()">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" :class="{ show: isMenuShown }">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="auctions">Aukcje</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="promotions">Promocje</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="advices">Podpowiadamy</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
