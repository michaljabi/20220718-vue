<template>
  <div>
    <h1>3. Pokaż mi więcej o Vue</h1>
    <h2>Używanie pluginów</h2>
    <HelloWorld />
    <h2>Lifecycle methods</h2>
    <LifecycleMethods />
    <h2>Event modifiers</h2>
    <h3>Formularz z <code>.prevent</code></h3>
    <form @submit.prevent="handleFormSend()">
      <input v-model="hello" name="hello" />
      <button type="submit">Wyślij wartość</button>
    </form>
  </div>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import LifecycleMethods from "./components/LifecycleMethods.vue";

import { ref } from "vue";
const hello = ref("World");

function handleFormSend() {
  // Wysyłka przez AJAX....
  console.log(hello.value);
}

/*
  // Alternatywnie [Options API]

export default {
  name: 'ShowMeMoreSite',
  components: {
    LifecycleMethods,
    HelloWorld,
  },
  data() {
    return {
      hello: 'World',
    };
  },
  methods: {
    handleFormSend() {
      // Wysyłka przez AJAX....
      console.log(this.hello);
    },
  },
};

 */
</script>
