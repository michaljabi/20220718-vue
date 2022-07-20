<script setup>
import auctionService from '@/services/auction-service'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useCartStore } from '@/stores/cart'
const cartStore = useCartStore()

import AuctionCard from '@/components/AuctionCard.vue'

const isLoading = ref(true)
const errorMessage = ref('')
const auctionList = ref([])
const hasNoAuctions = computed(
  () =>
    !isLoading.value && auctionList.value.length === 0 && !errorMessage.value
)

const abortController = new AbortController()
onMounted(async () => {
  try {
    auctionList.value = await auctionService.getAll(abortController)
  } catch (err) {
    errorMessage.value = err.message
  } finally {
    isLoading.value = false
  }
})

onUnmounted(() => {
  abortController.abort()
})
</script>

<template>
  <div>
    <h2>Lista naszych aukcji</h2>
  </div>
  <div>
    <div class="row">
      <div class="col-12" v-if="isLoading">
        <div class="alert alert-info">
          <FaIcon icon="spinner" spin />
          Ładuję aukcje... poczekaj
        </div>
      </div>
      <div class="col-12" v-if="errorMessage">
        <div class="alert alert-danger">Wystąpił błąd: {{ errorMessage }}</div>
      </div>
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
        v-for="auctionItem of auctionList"
        :key="auctionItem.id"
      >
        <AuctionCard
          :auction="auctionItem"
          @add-to-cart="cartStore.addItemToCart($event)"
        />
      </div>
      <div class="col-12" v-if="hasNoAuctions">
        Nowe aukcje już za rogiem... odwiedź nas już jutro
      </div>
    </div>
  </div>
</template>
