<template>
  <div
    :style="{ backgroundColor: 'darkred', fontSize: fontSize }"
    style="color: white"
  >
    Mam styl
  </div>
  <div :style="{ backgroundColor: 'darkred', fontSize }" style="color: white">
    To jest ten sam zapis ale korzysta z ES6
  </div>
  <div :style="[{ backgroundColor: 'darkred' }, { color: 'white' }]">
    To jest podobny zapis
  </div>
  <div class="green padded">
    To jest styl zdefiniowany jako klasa <code>CSS</code> dostępny tylko w tym
    komponencie
  </div>
</template>

<script setup>
import { ref } from "vue";

const fontSize = ref("40px");

/*
  // Alternatywnie [Options API]

export default {
  name: 'ApplyStyling',
  data() {
    return {
      fontSize: '40px',
    };
  },
};

*/
</script>

<style scoped>
.padded {
  padding: 20px;
}
.green {
  background-color: #0ea80e;
  color: white;
}
</style>
