<script>
import { ref } from 'vue'

export default {
    props: { text: {
        type: String,
        default: 'Hello'
    } },
    setup() {
       const counter = ref(0); 
       return { counter } 
    }
}
</script>

<template>
    <header class="p-5 mb-4 bg-light rounded-3">
        <h1 @click="counter++">{{text}} {{counter}}</h1>
    </header>
</template>