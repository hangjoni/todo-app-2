import './assets/tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'
import Modals from './plugins/modals'

createApp(App).use(Modals).mount('#app')
