<script>
    // TO jest mock !
    // Finalnie zamienimy to na fizyczny strzał do AJAX (backend call)
    console.log('Hello form Auctions MOCK - one time only...');
    /* async function getAuctions() {
        return [
            {
                id: 1,
                title: "Części do aparatu",
                imgUrl: "https://picsum.photos/id/36/400/400",
                description: "Jakiś inny opis",
                price: 2000
            },
            {
                id: 2,
                title: "Części do aparatu",
                imgUrl: "https://picsum.photos/id/232/400/400",
                description: "Jakiś opis",
                price: 2000
            }
        ]
    } */
</script>

<script setup>
    import {ref, onMounted} from 'vue'
    import AuctionCard from '@/components/AuctionCard.vue'
    import { auctionService } from '@/services/auction.service'

    const auctions = ref([])
    const isLoading = ref(true);
    const errorMessage = ref('');

    onMounted(async () => {
        try {
            const response = await auctionService.getAll();
            auctions.value = response.data;
        } catch (err) {
            console.log(err);
            errorMessage.value = err;
        } finally {
            isLoading.value = false
        }
    })

    console.log('Hello form New AuctiosView Instance!');
</script>

<template>
    <h2>Lista naszych aukcji</h2>
    <div class="row">
        <div class="col-12" v-if="isLoading">
            <div class="alert alert-info"> Ładuję aukcje... </div>
       </div>
       <div class="col-12" v-if="errorMessage">
            <div class="alert alert-danger"> Wystąpił błąd: {{errorMessage}}</div>
       </div>
       <div v-for="item in auctions" :key="item.id" class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <AuctionCard :auction="item" />
          <!-- 
            wykorzystaj auctions i iteruj v-for, 
            utwórz nowy komponent <AuctionCard> i przekazj jako prop auction 
            https://codesandbox.io/s/auction-portal-pure-html-0cu8c?file=/acuction-item-card.html:0-339        
        -->
       </div>
    </div>
</template>
