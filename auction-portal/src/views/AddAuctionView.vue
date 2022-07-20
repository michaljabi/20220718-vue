<script setup>
    import { ref, reactive, computed } from 'vue';
    import { auctionService } from '../services/auction.service';

    const auction = reactive({
        title: 'coś',
        imgUrl: 1,
        description: '',
        price: 0
    })
    const auctionErrors = ref({
        title: '',
        imgUrl: '',
        description: '',
        price: ''
    })

    function validate() {
        let isValid = true;
        auctionErrors.value = {
            title: '',
            imgUrl: '',
            description: '',
            price: ''
        }
        if(!auction.title) {
           auctionErrors.value.title = 'Title is required'
           isValid = false;
        }
        if(!auction.price) {
           auctionErrors.value.price = 'Price must be defined'
           isValid = false;
        }
        return isValid;
    } 

    const imgUrl = computed(() => `https://picsum.photos/id/${auction.imgUrl}/600/600`)

    async function handleSubmit() {
        const auctionToSend = {...auction};
        auctionToSend.imgUrl = imgUrl.value;

        if(!validate()) {
            return;
        }

        try {
           const { data } =  await auctionService.addAuction(auctionToSend)
           console.log(data);
        } catch (err) {
           console.log(err)
        }
    }
</script>

<template>
    <h2>Dodaj nową aukcję</h2>
    <section class="mt-2 row">
  <div class="col-6">
    <img
      class="img-thumbnail"
      alt="Podgląd fotografii"
      :src="imgUrl"
    />
  </div>
  <div class="col-6">
    <form @submit.prevent="handleSubmit()">
      <div class="form-group">
        <label for="auctionTitle">Nazwa aukcji</label>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <!-- <fa-icon icon="edit" /> -->
            </span>
          </div>
          <input
            id="auctionTitle"
            type="text"
            name="title"
            class="form-control"
            v-model="auction.title"
          />
        </div>
         <div class="alert alert-danger" v-if="auctionErrors.title">
            {{auctionErrors.title}}
         </div>
      </div>

      <div class="form-group">
        <label for="auctionPrice">Cena aukcji</label>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <!-- <fa-icon icon="tag" /> -->
            </span>
          </div>
          <input
            id="auctionPrice"
            type="number"
            name="price"
            class="form-control"
            v-model="auction.price"
          />
        </div>
        <div class="alert alert-danger" v-if="auctionErrors.price">
            {{auctionErrors.price}}
        </div>
      </div>

      <div class="form-group">
        <label for="img">Zdjecie</label>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <!-- <fa-icon icon="image" /> -->
            </span>
          </div>
          <input
            id="img"
            type="number"
            name="imgUrl"
            required
            class="form-control"
            v-model="auction.imgUrl"
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
      <div class="text-right">
        <button class="btn btn-primary" type="submit">
          <!-- <fa-icon icon="gavel" /> --> Dodaj aukcję
        </button>
      </div>
    </form>
  </div>
</section>
</template>
