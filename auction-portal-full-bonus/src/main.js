import { auctionPortalIconSet } from '@/plugins/auction-portal-icon-set'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(auctionPortalIconSet)

app.mount('#app')
