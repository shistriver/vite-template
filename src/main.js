import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

console.log(process.env.NODE_ENV)
console.log(import.meta.env.VITE_HOST) // hostname
console.log(import.meta.env.VITE_PORT) // port
console.log(import.meta.env.VITE_BASE_URL) // base
console.log(import.meta.env.VITE_OUTPUT_DIR) // outDir
console.log(import.meta.env.VITE_API_DOMAIN) // api url

createApp(App).mount('#app')
