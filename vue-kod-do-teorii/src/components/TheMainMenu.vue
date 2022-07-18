<template>
  <nav class="menu">
    <router-link class="menu_link" to="/">Dyrektywy</router-link>
    <router-link class="menu_link" to="/communication">Komunikacja</router-link>
    <router-link class="menu_link" to="/show-more">Więcej</router-link>
    <router-link class="menu_link" to="/ajax">Zapytania AJAX</router-link>
    <router-link class="menu_link" to="/composition-api"
      >Composition API</router-link
    >
    <router-link class="menu_link" to="/animations">Animacje</router-link>
    <router-link class="menu_link" to="/global-state"
      >Stan globalny</router-link
    >
    <router-link class="menu_link" to="/mixins"
      >Mixins (options API)</router-link
    >
    <router-link class="menu_link" to="/options-api">Options API</router-link>
  </nav>
</template>

<script setup>
/*
  // Alternatywnie [Options API]

export default {
  name: 'TheMainMenu',
};

 */
</script>

<style scoped>
.menu {
  text-align: center;
  font-size: 1.2rem;
  padding-bottom: 10px;
}
.menu .menu_link {
  margin-right: 10px;
  text-decoration: none;
  background-color: #42b983;
  color: #35435c;
  padding: 2px 15px;
  border-bottom: 2px solid #35435c;
  transition: all 0.3s ease-out;
}

.menu .menu_link:hover {
  color: white;
  border-bottom-color: white;
}
</style>
