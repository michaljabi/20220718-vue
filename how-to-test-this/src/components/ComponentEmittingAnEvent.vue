<script setup>
defineEmits(['addToCart'])
const items = [
  { id: 1, title: 'Some Item' },
  { id: 2, title: 'Other fake Item' },
]
</script>

<template>
  <ul class="list-group">
    <li
      class="list-group-item d-flex justify-content-between align-items-center"
      v-for="item of items"
      :key="item.id"
    >
      <span>{{ item.id }} | {{ item.title }}</span>
      <button
        class="btn btn-secondary btn-light"
        @click="$emit('addToCart', item)"
      >
        ➕ do koszyka
      </button>
    </li>
  </ul>
</template>
