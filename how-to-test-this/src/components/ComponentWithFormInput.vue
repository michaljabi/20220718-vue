<script setup>
import { ref } from 'vue'
const userEmail = ref('')
const emailError = ref('')

const emit = defineEmits(['subscribeWithEmail'])

const validate = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail.value)

function handleSubmit() {
  if (!validate()) {
    emailError.value = 'Invalid email address...'
    return
  }
  emailError.value = ''
  emit('subscribeWithEmail', userEmail.value)
  userEmail.value = ''
}
</script>

<template>
  <form class="my-4" novalidate @submit.prevent="handleSubmit()">
    <div class="mb-3 w-50">
      <label for="email" class="form-label">
        Wpisz adres e-mail, aby subskrybować:
      </label>
      <div class="input-group">
        <input
          type="email"
          class="form-control"
          :class="{ 'border-danger': emailError }"
          id="email"
          placeholder="your.email@example.com"
          v-model="userEmail"
        />
        <button type="submit" class="btn btn-outline-primary">Zapisz</button>
      </div>
      <div class="alert alert-danger border-danger" v-if="emailError">
        {{ emailError }}
      </div>
    </div>
  </form>
</template>
