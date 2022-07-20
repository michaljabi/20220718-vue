import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Używanie aliasu ścieżki sprawdź: vite.config.js !!! @ to alias do ./src
import App from '@/App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
