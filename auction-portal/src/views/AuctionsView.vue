<script>
    // TO jest mock !
    // Finalnie zamienimy to na fizyczny strzał do AJAX (backend call)
    console.log('Hello form Auctions MOCK - one time only...');
    async function getAuctions() {
        return [
            {
                id: 1,
                title: "Części do aparatu",
                imgUrl: "https://picsum.photos/id/36/200/200",
                description: "Jakiś opis",
                price: 2000
            }
        ]
    }
</script>

<script setup>
    import {ref, onMounted} from 'vue'

    const auctions = ref([])

    onMounted(async () => {
        auctions.value = await getAuctions();
    })

    console.log('Hello form New AuctiosView Instance!');
</script>

<template>
    <h2>Lista naszych aukcji</h2>
    <div class="row">
       <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <AuctionCard />
          <!-- 
            wykorzystaj auctions i iteruj v-for, 
            utwórz nowy komponent <AuctionCard> i przekazj jako prop auction 
            https://codesandbox.io/s/auction-portal-pure-html-0cu8c?file=/acuction-item-card.html:0-339        
        -->
       </div> 
       <!-- przykład: -->
       <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          Aukcja 2
       </div> 
       <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          Aukcja 3
       </div> 
    </div>
</template>
