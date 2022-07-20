<script setup>
    import { RouterLink } from 'vue-router'
    import { ref } from 'vue'

    const isMenuShown = ref(false)
    const menuItems = [
        { link: 'auctions', name: 'Aukcje' },
        { link: 'promotions', name: 'Promocje' },
        { link: 'advices', name: 'Podpowiadamy' },
    ]

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
        <!-- 
            zastosuj v-for :key="" do generowania elementów menu
            przygotuj model danych w logice.
        -->
        <li class="nav-item" v-for="item in menuItems" :key="item.link">
          <RouterLink class="nav-link" :to="item.link">{{item.name}}</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
