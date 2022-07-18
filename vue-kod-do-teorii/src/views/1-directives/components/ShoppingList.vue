<template>
  <h3>My {{ "Shopping" }} list</h3>
  <ol>
    <li v-for="product in filteredProducts" :key="product">
      {{ applyIcon(product, { bananas: "🍌", apples: "🍏", grapes: "🍇" }) }}
    </li>
  </ol>
  <input v-model="filterByName" placeholder="filter fruit..." />
</template>

<script setup>
import { ref, computed } from "vue";

const filterByName = ref("");
const products = ["Apples", "Bananas", "Grapes", "a Thing", "other Thing.."];
const filteredProducts = computed(() => {
  const lowerFilter = filterByName.value.toLowerCase();
  return products.filter((name) => name.toLowerCase().includes(lowerFilter));
});

function applyIcon(value, icons = {}) {
  return value + " " + (icons[value.toLowerCase()] || "❔");
}

/*
  // Alternatywnie [Options API]

export default {
  name: 'ShoppingList',
  data() {
    return {
      filterByName: '',
      products: ['Apples', 'Bananas', 'Grapes', 'a Thing', 'other Thing..'],
    };
  },
  computed: {
      filteredProducts() {
        const lowerFilter = this.filterByName.toLowerCase();
        return this.products.filter(name => name.toLowerCase().includes(lowerFilter))
      }
  },
  methods: {
    applyIcon(value, icons = {}) {
      return value + ' ' + (icons[value.toLowerCase()] || '❔');
    },
  },
};

*/
</script>

<style></style>
