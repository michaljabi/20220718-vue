import userService from '@/services/user-service'
import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    email: '',
    token: '',
  }),
  getters: {
    authToken: (state) => state.token,
    isAuth: (state) => Boolean(state.email && state.token),
  },
  actions: {
    async logIn(payload) {
      const { email, password } = payload
      try {
        const { token } = await userService.logIn(email, password)
        this.email = email
        this.token = token
      } catch (err) {
        this.logOut()
        throw new Error(err?.response?.data?.message || err.message)
      }
    },
    logOut() {
      this.email = ''
      this.token = ''
      console.log('!')
    },
  },
})
