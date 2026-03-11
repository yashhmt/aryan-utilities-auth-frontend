import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Make sure this points to src/router/index.ts

const app = createApp(App)
app.use(router)
app.mount('#app')