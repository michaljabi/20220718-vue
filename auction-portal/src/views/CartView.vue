<script setup>
    import { useCartStore } from '@/stores/cart'

    const castStore = useCartStore();
</script>

<template>
    <h2>Koszyk</h2>
    {{castStore.items}}

    <div>Suma elementów w koszyku: {{castStore.allItemsCount}}</div>
</template>
