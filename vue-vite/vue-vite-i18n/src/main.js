import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'

// new stuff
import i18n from './plugins/i18n'

createApp(App).use(i18n).mount('#app')
