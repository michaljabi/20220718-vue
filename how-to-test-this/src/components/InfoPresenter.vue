<script setup>
defineProps({
  explain: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section>
    <code> -- {{ explain }} -- </code>
    <slot />
    <hr />
  </section>
</template>

<style scoped>
section {
  margin-top: 30px;
}
code {
  font-size: 20px;
}
</style>
