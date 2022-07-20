<script setup>
defineProps({
    auction: {
        type: Object,
        default: () => {
            return { 
                id: 3,
                title: "Most",
                imgUrl: "https://picsum.photos/id/122/400/400",
                description: "Jakiś opis 23",
                price: 1000
           }
        }
    }
})
</script>

<template>
    <div class="card">
    <div class="card-header">{{auction.title}}</div>
    <img class="card-img" :src="auction.imgUrl" :alt="auction.title" />
    <div class="card-body">
        <p class="card-text">{{auction.description}}</p>
        <div class="d-flex justify-content-between align-content-center">
        <strong> {{auction.price}} zł</strong>
        <button class="btn btn-primary"></button>
        </div>
    </div>
    </div>
</template>