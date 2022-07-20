<script setup>
    import { useRoute, useRouter } from 'vue-router'

    const route = useRoute();
    const router = useRouter();

    function handleGoHomeClick() {
        router.push('/')
    }
</script>

<template>
    <h2>Page <code>/{{route.params.pathMatch.join('/')}}</code> not found...</h2>
    <hr />
    <button class="btn btn-primary" @click="handleGoHomeClick">Go back to home</button>
</template>