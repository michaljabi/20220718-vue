<template>
  <div :class="['alert', type]">
    <button @click="$emit('close')">X</button> {{ message }}
  </div>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: "danger",
  },
  message: String,
});
</script>

<style scoped>
.alert {
  width: 80%;
  margin: 10px auto;
  border: 2px solid;
  padding: 10px 100px 10px 10px;
  border-radius: 5px;
  position: relative;
}
.alert::after {
  content: "❕❕";
  position: absolute;
  right: 10px;
}
.alert.danger {
  border-color: darkred;
  background-color: #9f4f51;
  color: white;
}
.alert.warning {
  border-color: #845219;
  background-color: #d1a067;
  color: black;
}
</style>
