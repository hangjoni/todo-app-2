import './assets/tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'
import Modals from './plugins/modals'
import router from './router'

createApp(App).use(router).use(Modals).mount('#app')
