import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { vMaska } from "maska"

import VueTheMask from 'vue-the-mask'


const app = createApp(App); 

app.use(VueTheMask)

app.directive("maska", vMaska) //diretiva para globalizar o maska

app.mount('#app')
