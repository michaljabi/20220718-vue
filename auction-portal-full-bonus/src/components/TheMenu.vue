<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const cartStore = useCartStore()

const isMenuShown = ref(false)
const menuItems = [
  { name: 'Aukcje', link: '/auctions' },
  { name: 'Promocje', link: '/promotions' },
  { name: 'Podpowiadamy', link: '/advices' },
]
const toggleMenuShow = () => (isMenuShown.value = !isMenuShown.value)
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light p-2 mb-4">
    <button class="navbar-toggler" type="button" @click="toggleMenuShow">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" :class="{ show: isMenuShown }">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="item of menuItems" :key="item.link">
          <RouterLink class="nav-link" :to="item.link">
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="text-light">
      <button
        class="btn btn-danger m-2"
        @click="userStore.logOut()"
        v-if="userStore.isAuth"
      >
        <FaIcon icon="sign-out-alt" /> Wyloguj
      </button>
      <RouterLink
        class="btn btn-primary m-2"
        to="/add-auction"
        v-if="userStore.isAuth"
      >
        <FaIcon icon="plus" /> Dodaj
      </RouterLink>
      <RouterLink class="btn btn-secondary m-2" to="/log-in" v-else>
        <FaIcon icon="sign-in-alt" /> Zaloguj
      </RouterLink>
      <RouterLink class="btn btn-secondary m-2" to="/shopping-cart">
        <FaIcon icon="shopping-basket" /> Koszyk ({{
          cartStore.countCartItems
        }})
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped></style>
