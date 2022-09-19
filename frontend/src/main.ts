import { createApp } from 'vue'
import './style.scss'
import router from './router'
import App from './App.vue'

const app = createApp(App).use(router)

app.mount('#app')
