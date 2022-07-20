<script setup>
import auctionService from '@/services/auction-service'
import { computed, reactive, ref } from 'vue'

const EMPTY_AUCTION = {
  title: '',
  price: 0,
  imgUrl: 1,
  description: '',
}
const errorMessage = ref('')
const auction = reactive({ ...EMPTY_AUCTION })

const imagePath = computed(
  () => `https://picsum.photos/id/${auction.imgUrl}/600/600`
)

async function handleForm() {
  const auctionToSend = { ...auction }
  auctionToSend.imgUrl = `https://picsum.photos/id/${auction.imgUrl}/200/200`
  errorMessage.value = ''
  try {
    await auctionService.add(auctionToSend);
    Object.assign(auction, EMPTY_AUCTION)
  } catch (err) {
    errorMessage.value = err?.response?.data?.message || err.message
  }
}
</script>

<template>
  <div>
    <h2>Dodaj aukcję</h2>
  </div>
  <section class="mt-2 row">
    <div class="col-6">
      <img class="img-thumbnail" alt="Podgląd fotografii" :src="imagePath" />
    </div>
    <div class="col-6">
      <form @submit.prevent="handleForm">
        <div class="form-group">
          <label for="auctionTitle">Nazwa aukcji</label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <fa-icon icon="edit" />
              </span>
            </div>
            <input
              id="auctionTitle"
              type="text"
              name="title"
              required
              class="form-control"
              v-model="auction.title"
            />
          </div>
        </div>

        <div class="form-group">
          <label for="auctionPrice">Cena aukcji</label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <fa-icon icon="tag" />
              </span>
            </div>
            <input
              id="auctionPrice"
              type="number"
              name="price"
              required
              class="form-control"
              v-model.number="auction.price"
            />
          </div>
        </div>

        <div class="form-group">
          <label for="img">Zdjecie</label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <fa-icon icon="image" />
              </span>
            </div>
            <input
              id="img"
              type="number"
              name="imgUrl"
              required
              class="form-control"
              v-model.number="auction.imgUrl"
            />
          </div>
        </div>

        <div class="form-group">
          <label for="auctionDescription">Szczegółowy opis</label>
          <div class="input-group mb-3">
            <textarea
              id="auctionDescription"
              rows="5"
              class="form-control"
              name="description"
              v-model="auction.description"
            ></textarea>
          </div>
        </div>
        <div class="alert alert-danger" v-if="errorMessage">
          {{ errorMessage }}
        </div>
        <div class="text-right">
          <button class="btn btn-primary" type="submit">
            <fa-icon icon="gavel" />
            Dodaj aukcję
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
