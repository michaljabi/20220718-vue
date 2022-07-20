import axios from 'axios'
//import store from '@/store'

export const axInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
})

axInstance.interceptors.request.use((request) => {
  // request.headers.Authorization = `Bearer ${store.getters['user/authToken']}`
  return request
})

axInstance.interceptors.response.use((response) => {
  return response.data
})
