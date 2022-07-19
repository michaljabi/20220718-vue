<script>
export default {
    props: { text: String },
}
</script>

<template>
    <header class="p-5 mb-4 bg-light rounded-3">
        <h1>{{text}}</h1>
    </header>
</template>