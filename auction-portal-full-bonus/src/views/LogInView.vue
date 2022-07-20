<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const userStore = useUserStore()
const user = reactive({ email: '', password: '' })
const errorMessage = ref('')

async function handleLoginForm() {
  try {
    await userStore.logIn(user)
    await router.push('/')
  } catch (e) {
    errorMessage.value = e.message
  }
}
</script>

<template>
  <div class="my-3">
    <h2>Logowanie użytkownika</h2>
  </div>
  <div class="mt-5 d-flex justify-content-center">
    <form @submit.prevent="handleLoginForm">
      <div class="form-group">
        <label for="email">Adres e-mail</label>
        <span class="text-muted small"> (john@email.com)</span>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <FaIcon icon="envelope"/>
            </span>
          </div>
          <input id="email" class="form-control" v-model="user.email" required />
        </div>
      </div>

      <div class="form-group">
        <label for="password">Hasło dostępu</label>
        <span class="text-muted small"> 1234</span>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <FaIcon icon="key"/>
            </span>
          </div>
          <input
            id="password"
            type="password"
            v-model="user.password"
            required
            class="form-control"
          />
        </div>
      </div>
      <div v-if="errorMessage">
        <div class="alert alert-danger">{{ errorMessage }}</div>
      </div>
      <div class="text-right">
        <button class="btn btn-primary" type="submit">
          <FaIcon icon="sign-in-alt"/>
          Zaloguj
        </button>
      </div>
    </form>
  </div>
</template>
